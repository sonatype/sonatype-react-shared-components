/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
@Library(['private-pipeline-library', 'jenkins-shared']) _

def seleniumDockerImage = 'docker-all.repo.sonatype.com/selenium/standalone-chrome'
def seleniumDockerVersion = '3.141.59-20200730'

dockerizedBuildPipeline(
  // expose gallery port on host so selenium container can hit it
  dockerArgs: '-p 4043:4043',

  prepare: {
    githubStatusUpdate('pending')

    withSonatypeDockerRegistry() {
      sh """
        docker run --name selenium-chrome -d \
          -p 4444:4444 \
          -v /dev/shm:/dev/shm \
          -e NODE_MAX_INSTANCES=5 -e NODE_MAX_SESSION=5 \
          ${seleniumDockerImage}:${seleniumDockerVersion}
      """
    }
  },
  setVersion: {
    env['VERSION'] = sh(returnStdout: true, script: 'jq -r -e .version lib/package.json').trim()
  },
  buildAndTest: {
    // In this repo, all PRs must bump the version number so that master builds can be automatically released.
    // This shell script enforces that
    sh '''
      # function that returns whether its first parameter is a versions string that is less than or equal to
      # the second parameter
      # From https://stackoverflow.com/a/4024263
      verlte() {
          [  "$1" = "`/bin/echo -e "$1\\n$2" | sort -V | head -n1`" ]
      }

      if [ "$BRANCH_NAME" != "master" ]; then
        version=$VERSION
        masterVersion=$(git cat-file blob origin/master:./lib/package.json | jq -r .version)

        galleryVersion=$(jq -r .version gallery/package.json)
        masterGalleryVersion=$(git cat-file blob origin/master:./gallery/package.json | jq -r .version)

        if [ -z "$version" ] || [ -z "$masterVersion" ] || [ -z "$galleryVersion" ] || [ -z "$masterGalleryVersion" ];
        then
          echo 'Version lookups failed!'
          exit 2
        elif [ "$version" != "$galleryVersion" ]; then
          echo 'Library and Gallery versions must match'
          exit 1
        elif [ "$version" = "$masterVersion" ] || [ "$galleryVersion" = "$masterGalleryVersion" ]; then
          echo 'Package versions must be updated from what is on master'
          exit 1
        elif verlte "$version" "$masterVersion" || verlte "$galleryVersion" "$masterGalleryVersion"; then
          echo 'Package versions must be higher than what is on master'
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

    withCredentials([string(credentialsId: 'REACT_SHARED_COMPONENTS_APPLITOOLS_KEY', variable: 'APPLITOOLS_API_KEY')]) {
      sh '''
        registry=https://repo.sonatype.com/repository/npm-all/

        cd lib
        yarn install --registry "${registry}"
        npm run test
        npm run build
        cd dist
        npm pack
        cd ../..

        cd gallery
        yarn install --registry "${registry}"

        # Run the visual tests, hitting the selenium server on the host (which its port was forwarded to)
        TEST_IP=$JENKINS_AGENT_IP npm run test
        npm run build
        cd ..
      '''
    }
  },
  vulnerabilityScan: {
    if (env.BRANCH_NAME == 'master') {
      nexusPolicyEvaluation(
        iqStage: 'release',
        iqApplication: 'react-shared-components',
        iqScanPatterns: [[scanPattern: 'gallery/webpack-modules']],
        failBuildOnNetworkError: true
      )
    }
  },
  deploy: {
    withCredentials([string(credentialsId: 'uxui-npm-auth-token', variable: 'NPM_TOKEN')]) {
      withDockerImage(env.DOCKER_IMAGE_ID, 'npmjs-npmrc') {
        sh 'npm publish --access public lib/dist/sonatype-react-shared-components-$VERSION.tgz'
      }
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
  testResults: ['lib/junit.xml'],
  onSuccess: {
    githubStatusUpdate('success')
    if (env.BRANCH_NAME == 'master') {
      build job:'/uxui/publish-gallery-to-s3', propagate: false, wait: false, parameters: [
        run(name: 'Producer', runId: "${currentBuild.fullProjectName}${currentBuild.displayName}")
      ]
    }
  },
  onFailure: {
    githubStatusUpdate('failure')
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
