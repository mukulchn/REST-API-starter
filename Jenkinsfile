pipeline {
    agent any

    environment {
        CREDS = credentials('sa-mkc-vm-gcr')
	CREDS_GKE = credentials('sa-mkc-gke-auth') 
    }

    stages {
        stage('Build App') {
            steps {
                //
                sh "echo $CREDS"

		//sh ./build.sh ${BUILD_NUMBER}
		sh "npm install"
            }
        }
        stage('Test App') {
            steps {
                sh "npm test"
            }
        }
        stage('Build Container') {
            steps {
                //
		sh "echo 'Deployment yet to be sorted'"
		sh "docker build -t nodeapp:v${BUILD_NUMBER} ."
		sh "docker tag nodeapp:v${BUILD_NUMBER} gcr.io/training-325404/nodeapp-mukul:v${BUILD_NUMBER}"
		sh "cat $CREDS | docker login -u _json_key --password-stdin https://gcr.io"
		sh "docker push gcr.io/training-325404/nodeapp-mukul:v${BUILD_NUMBER}"
            }
        }
        stage('Deploy to GKE') {
            steps {
                //
                sh "echo 'Deployment started...'"
		sh "gcloud auth activate-service-account sa-mkc-gke-auth@training-325404.iam.gserviceaccount.com --key-file=$CREDS_GKE"
		sh "gcloud container clusters get-credentials k8-cluster-mukul --zone=europe-west2-b"
		sh "cat ~/.kube/config"
		sh "sed 's/VERSION/${BUILD_NUMBER}/g' ./k8s/deployment.yml > ./k8s/deploymenttmp.yml"
		sh "kubectl apply -f ./k8s/deploymenttmp.yml"
		sh "rm ./k8s/deploymenttmp.yml"
		sh "kubectl get pods"
		sh "echo 'deployed successfully...'"
            }
        }
    }
}
