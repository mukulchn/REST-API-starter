pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                //
		//sh ./build.sh ${BUILD_NUMBER}
		sh "npm install"
            }
        }
        stage('Test') {
            steps {
                sh "npm test"
            }
        }
        stage('Deploy') {
            steps {
                //
		sh "echo 'Deployment yet to be sorted'"
            }
        }
    }
}
