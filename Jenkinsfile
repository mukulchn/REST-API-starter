pipeline {
    agent any

    environment {
        CREDS = credentials('sa-mkc-vm-gcr')
    }

    stages {
        stage('Build') {
            steps {
                //
                sh "echo $CREDS"

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
		sh "docker build -t nodeapp:v${BUILD_NUMBER} ."
		sh "docker tag nodeapp:v${BUILD_NUMBER} gcr.io/training-325404/nodeapp-mukul:v${BUILD_NUMBER}"
		sh "cat $CREDS | docker login -u _json_key --password-stdin https://gcr.io"
		sh "docker push gcr.io/training-325404/nodeapp-mukul:v${BUILD_NUMBER}"
		
            }
        }
    }
}
