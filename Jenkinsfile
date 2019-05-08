pipeline {
    agent any
    environment {
        WORKDIR = ""
        DOCKER_HUB_CREDENTIALS = ""
        DOCKER_IMAGE = ""
        DOCKER_TAG = "${env.BUILD_ID}"
        SLACK_CHANNEL = ""
        def dockerImage = ""
    }
    stages {
        stage('Build') {
            steps {
                echo "### Running Build stage ..."
                echo "Build number = #${DOCKER_TAG}"
                //slackSend channel: "${SLACK_CHANNEL}", color: "#439FE0", message: "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
                echo "*** Nothing to build, skipping ... ***"
                echo "### Build stage done"
            }
        }
        stage('Test') {
            steps {
                echo "### Running Test stage ..."
                echo "*** No test scripts found, skipping ... ***"
                echo "### Test stage done"
            }
        }
    }
    post {
        always {
            echo "Pipeline finished"
        }
        success {
            //slackSend channel: "${SLACK_CHANNEL}", color: "#439FE0", message: "Pipeline ${currentBuild.fullDisplayName} completed successfully, look at the build @ ${env.BUILD_URL}"
            //mail to: 'simone.bonetti@it.ibm.com', subject: "Pipeline ${currentBuild.fullDisplayName} completed successfully !!!", body: "Pipeline completed successfully, have a look at the build @ ${env.BUILD_URL}"
            echo "SUCCESS!"
        }
        failure {
            //slackSend channel: "${SLACK_CHANNEL}", color: "#439FE0", message: "Pipeline ${currentBuild.fullDisplayName} completed with errors, look at the build @ ${env.BUILD_URL}"
            echo "FAILURE!"
        }
    }
}
