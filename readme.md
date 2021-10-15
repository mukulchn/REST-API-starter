# REST API Starter project specification

## Introduction

The REST API Starter project is a hands-on task to apply the knowledge gained during the previous days of the MEP pathway.

The project touches on modern teck stack of javascript, nodeJs, REST, Microservices, JSON, TDD, testing using JEST and builds a project using REST/ Microservices architecture pattern.

This is also a try to acquaint the developer with version control (git), day-to-day and some advanced git commands, comfort at applying this version control process, branching, reverting etc.


## Part 1 - Installation

To initialise the project you will need to install several dependencies, open up a git bash terminal from the repo directory and run the command:

~~~ bash
$ npm install
~~~

## Running the application

In order to run the application, from your git bash terminal run:

~~~ bash
$ npm start
API Listening on http://localhost:8080
~~~

## Stopping the application

In order to stop the application from the git bash terminal that is running the server press ``CTRL`` + ``C``

## Running on a different port

To start the application on an alternative port to the default (8080) from your git bash terminal run:

~~~ bash
$ PORT=9090 npm start
API Listening on http://localhost:9090
~~~

## Functionality

n.b: For these commands anything surrounded by angled braces <> needs to be replaced by you

#### CREATE

To create the example product run the command:

~~~ bash
$ curl -s -X POST http://localhost:8080/product/create -H 'Content-type:application/json' -d '{"name":"example product", "description":"this is an example", "price":9.99}'
~~~

#### READ (all)

To read all of the products run the command:

~~~ bash
$ curl -s -X GET http://localhost:8080/product/read
~~~

#### READ (one)

To read one of the products run the command:

~~~ bash
$ curl -s -X GET http://localhost:8080/product/read/<id>
~~~

#### UPDATE

To update one of the products run the command:

~~~ bash
$ curl -s -X PUT http://localhost:8080/product/update/<id> -H 'Content-type:application/json'  -d '{"name":"updated product", "description":"its brand new", "price":99.99}'
~~~

#### DELETE

To delete one of the products run the command:

~~~ bash
$ curl -s -X DELETE http://localhost:8080/product/delete/<id>
~~~

### Testing

To run tests, from the terminal run the command:

~~~ bash
$ npm test
~~~

### Quick Git cheatsheet

~~~ bash
  git commit -m "MK: exercise 1,2,3"
  git config --global user.email "mukul_chn@hotmail.com"
  git config --global user.name "mukulchn"
  git commit -m "MK: exercise 1,2,3"
  git push origin main
  ssh-keygen -t rsa -f ~/.ssh/id_rsa <<< y
  cat ~/.ssh/id_rsa.pub 
~~~

## Part 2 - Dockerisation of an application

Install docker:

~~~ bash
    sudo apt-get update
    sudo apt install curl -y
    curl https://get.docker.com | sudo bash
    id
    sudo usermod -aG docker $(whoami)
    id
    whoami
    id
~~~

You will need to log off and log on back to take the group change take place.

### Write Dockerfile, build image and run locally with docker

In order to build docker image and run the application, from your terminal run:

~~~ bash
   touch Dockerfile
   ls -ltr
   vi Dockerfile 
   touch .dockerignore
   vi .dockerignore 
   docker build -t nodeapp .
   sudo usermod -aG docker $(whoami)
   id
   docker build -t nodeapp .
   exit
   id
   cd REST-API-starter/
   docker build -t nodeapp .
   docker images
   docker run -d -p 8080:8080 --name nodeapp-ins nodeapp

   vi package.json 
   docker ls
   docker ps
   docker images
   docker rmi nodeapp
   docker ps -a
   docker rm nodeapp-ins
   docker ps -a
   docker rmi nodeapp
   docker images
   ~~~

### Creating build script and configure an app

This step is just to create a bash script and a config activity.
check build.sh file for this, nothing fancy here.

### Setting up Jenkins and pipeline and add jenkins user to docker group

This step is to download and install a Jenkins server on your local machine, Initialize a basic Jenkins configuration, Create an SCM pipeline polling latest changes from your Git server, Configure your pipeline to run tests and build an application on every Git commit.

~~~ bash
   touch install_jenkins.sh
  ls -ltr
  chmod 755 install_jenkins.sh
  ls -ltr
  vi install_jenkins.sh 
  ./install_jenkins.sh  
  sudo usermod -aG docker jenkins
  sudo su - jenkins
  sudo systemctl restart jenkins
~~~

Check Jenkinsfile for pipeline details.

### Building docker image in Jenkins

This step is to Modify an existing Jenkins pipeline to build Docker image of an application on every commit to the main/master branch.

Check Jenkinsfile for pipeline details.

### Publishing a docker image into GCP GCR

This step requird a Service Account to be created in GCP IAM.
Roles:
Storage Object Admin
Storage Admin

~~~ bash
  gcloud auth activate-service-account sa-mkc-vm-gcr@training-325404.iam.gserviceaccount.com --key-file=training-325404-d4b1ebf9fa72.json
  docker tag nodeapp:v10 gcr.io/training-325404/nodeapp-mukul:v10
  docker push gcr.io/training-325404/nodeapp-mukul:v10
~~~

Check Jenkinsfile for more details.

### Push a docker image from Jenkins into GCP GCR

added service account sa-mkc-vm-gcr@training-325404.iam.gserviceaccount.com to Jenkins as credential >> Secret file

added below command to Jenkins file, check Jenkinsfile for more details.
~~~ bash
  gcloud auth activate-service-account sa-mkc-vm-gcr@training-325404.iam.gserviceaccount.com --key-file=training-325404-d4b1ebf9fa72.json
  docker tag nodeapp:v10 gcr.io/training-325404/nodeapp-mukul:v10
  docker push gcr.io/training-325404/nodeapp-mukul:v10
~~~


