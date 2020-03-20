/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
@Library(['private-pipeline-library', 'jenkins-shared@CDI-292_support_named_config_withDocker']) _

dockerizedBuildPipeline(
  prepare: {
    githubStatusUpdate('pending')
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
          [  "$1" = "`echo -e "$1\n$2" | sort -V | head -n1`" ]
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

    sh '''
      cd lib
      yarn install
      npm run test
      npm run build
      cd ..

      cd gallery
      yarn install
      npm run build
      cd ..
    '''
  },
  vulnerabilityScan: {
    if (env.BRANCH_NAME == 'master') {
      nexusPolicyEvaluation(
        iqStage: 'build',
        iqApplication: 'react-shared-components',
        iqScanPatterns: [[scanPattern: 'gallery/webpack-modules']],
        failBuildOnNetworkError: true
      )
    }
  },
  deploy: {
    withCredentials([string(credentialsId: 'uxui-npm-auth-token', variable: 'NPM_TOKEN')]) {
      withDockerImage(env.DOCKER_IMAGE_ID, 'npmjs-npmrc') {
        sh 'npm publish --access public lib/dist'
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
  archiveArtifacts: 'lib/dist/*.tgz',
  testResults: ['lib/junit.xml'],
  onSuccess: {
    githubStatusUpdate('success')
  },
  onFailure: {
    githubStatusUpdate('failure')
  }
)
