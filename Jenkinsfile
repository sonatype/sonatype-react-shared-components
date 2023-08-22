/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
@Library(['private-pipeline-library', 'jenkins-shared']) _

def seleniumDockerImage = 'docker-all.repo.sonatype.com/selenium/standalone-chrome'
def seleniumDockerVersion = '4.0.0-rc-1-prerelease-20210618'

def deployBranch = '12.x-backports'

def isMainBranch() {
  env.BRANCH_NAME == 'main'
}

dockerizedBuildPipeline(
  deployBranch: deployBranch,
  // expose gallery port and nextjs dev port on host so selenium container can hit it
  dockerArgs: '-p 4043:4043 -p 3000:3000',

  // an npmrc file that's compatible with the npm from node 18
  npmConfigFileId: 'rsc-ro-npmrc-v9',

  prepare: {
    env['DEPLOY_BRANCH'] = deployBranch

    githubStatusUpdate('pending')

    withSonatypeDockerRegistry() {
      sh """
        docker run --name selenium-chrome -d \
            -p 4444:4444 \
            -v /dev/shm:/dev/shm \
            ${seleniumDockerImage}:${seleniumDockerVersion}
      """
    }
  },
  setVersion: {
    env['VERSION'] = sh(returnStdout: true, script: 'jq -r -e .version lib/package.json').trim()
  },
  buildAndTest: {
    // In this repo, all PRs must bump the version number so that the deploy branch builds can be automatically released.
    // This shell script enforces that
    sh '''
      # function that returns whether its first parameter is a versions string that is less than or equal to
      # the second parameter
      # From https://stackoverflow.com/a/4024263
      verlte() {
          [  "$1" = "`/bin/echo -e "$1\\n$2" | sort -V | head -n1`" ]
      }

      if [ "$BRANCH_NAME" != "$DEPLOY_BRANCH" ]; then
        version=$VERSION
        deployBranchVersion=$(git cat-file blob "origin/$DEPLOY_BRANCH:./lib/package.json" | jq -r .version)

        galleryVersion=$(jq -r .version gallery/package.json)
        deployBranchGalleryVersion=$(git cat-file blob "origin/$DEPLOY_BRANCH:./gallery/package.json" | jq -r .version)

        if [ -z "$version" ] || [ -z "$deployBranchVersion" ] || [ -z "$galleryVersion" ] || [ -z "$deployBranchGalleryVersion" ];
        then
          echo 'Version lookups failed!'
          exit 2
        elif [ "$version" != "$galleryVersion" ]; then
          echo 'Library and Gallery versions must match'
          exit 1
        elif [ "$version" = "$deployBranchVersion" ] || [ "$galleryVersion" = "$deployBranchGalleryVersion" ]; then
          echo "Package versions must be updated from what is on $DEPLOY_BRANCH"
          exit 1
        elif verlte "$version" "$deployBranchVersion" || verlte "$galleryVersion" "$deployBranchGalleryVersion"; then
          echo "Package versions must be higher than what is on $DEPLOY_BRANCH"
          exit 1
        fi
      fi
    '''

    // As this is an open source project, yarn.lock URLs should point to npmjs.org, not repo.sonatype.com
    sh '''
      exitSuccessfully=0

      for f in */yarn.lock; do
        if ( grep --quiet 'repo\\.sonatype\\.com' "${f}" ); then
          echo "repo.sonatype.com URL found in ${f}"
          exitSuccessfully=1
        fi
      done

      exit $exitSuccessfully
    '''

    withCredentials([string(credentialsId: 'GAINSIGHT_PX_API_KEY', variable: 'PX_API_KEY')]) {
      sh """
        registry=https://repo.sonatype.com/repository/npm-all/

        cd lib
        yarn install --registry "\${registry}" --frozen-lockfile
        yarn ci-test
        yarn build
        cd dist
        npm pack
        cd ../..

        cd gallery
        yarn install --registry "\${registry}" --frozen-lockfile

        yarn ci-test
        yarn build
        cd ..

        cd ssr-tests
        yarn install --registry "\${registry}" --frozen-lockfile

        # Run the server-side rendering tests, through docker similarly to the visual tests
        TEST_IP=\$JENKINS_AGENT_IP NEXT_TELEMETRY_DISABLED=1 yarn test
      """
    }
  },
  vulnerabilityScan: {
    nexusPolicyEvaluation(
      iqStage: isMainBranch() ? 'release' : 'develop',
      iqApplication: 'sonatype-react-shared-components',
      iqScanPatterns: [[scanPattern: 'gallery/webpack-modules']],
      failBuildOnNetworkError: true
    )
  },
  deploy: {
    def version = env.VERSION
    def majorVersion = version.substring(0, version.indexOf('.'))
    def tag = isMainBranch() ? null : "latest-$majorVersion"
    def tagArg = tag ? "--tag $tag" : ''

    def doPublish = { registry ->
      def registryArg = registry ? "--registry $registry" : ''

      sh "npm publish --access public $tagArg $registryArg lib/dist/sonatype-react-shared-components-\$VERSION.tgz"
    }

    // publish to repo.s.c. We must do this in addition to publishing to npmjs.com because of the
    // namespace confusion protection feature of Nexus Firewall. See RSC-1430 and the slack conversation
    // linked therein
    withDockerImage(env.DOCKER_IMAGE_ID, 'rsc-internal-write-npmrc-v9') {
      doPublish('https://repo.sonatype.com/repository/npm-internal/')
    }

    // publish to npmjs.com
    withCredentials([string(credentialsId: 'uxui-npm-auth-token', variable: 'NPM_TOKEN')]) {
      withDockerImage(env.DOCKER_IMAGE_ID, 'npmjs-npmrc', doPublish)
    }
  },
  postDeploy: {
    sshagent(credentials: [sonatypeZionCredentialsId()]) {
      sh '''
        tag="v$VERSION"
        git tag "$tag" && git push origin "$tag"
      '''
    }
  },
  archiveArtifacts: 'lib/dist/*.tgz,gallery/dist/**/*',
  testResults: ['lib/junit.xml', 'gallery/test-results/junit.xml'],
  onSuccess: {
    githubStatusUpdate('success')
    if (isMainBranch()) {
      build job:'/uxui/publish-gallery-with-versions-to-s3', propagate: false, wait: false, parameters: [
        [$class: 'StringParameterValue', name: 'RSC_VERSION', value: "${env.VERSION}"],
        run(name: 'Producer', runId: "${currentBuild.fullProjectName}${currentBuild.displayName}")
      ]
    }
  },
  onFailure: {
    githubStatusUpdate('failure')
    archiveArtifacts(artifacts: 'gallery/test-results/**/*')
    sendEmailNotification(currentBuild, env,
        [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], null)
  },
  cleanup: {
    sh """
      docker rm -f selenium-chrome

      docker rmi ${seleniumDockerImage}:${seleniumDockerVersion}
    """
  }
)
