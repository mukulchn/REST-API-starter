# Lloyds Bank Group Modern Engineering Bootcamp project specification

## Introduction

This is a project proposal for the Lloyds Bank Group Modern Engineering Pathway. The intention of this project is to provide students a hands-on task to apply the knowledge they gained during the previous days of the pathway.

The project is divided into two parts. Each project part is divided into tasks. Tasks should be completed in an order - a student should complete a previous task before going to a next one. Students can stop implementing the project at any stage they want - the more tasks they complete however, the more they learn.

## Part I

This project work covers the following topics:

* Source Control
* Node applications
* Cloud Native principles
* Theory of testing

Project tasks are aligned with Sprint 1 learning.

### 1. REST application development in Node

**Goals:**

* This is the first stage of our project in which students create a very simple REST application in Node.
* This application will be used by us in the later stages of the project.

**Tasks:**

* Create a simple Node application exposing REST API.
* An application should listen to incoming HTTP requests on port 8080.
* An application API should be used to expose catalog of products for an e-commerce system.
* An application should use an in-memory database to store a catalog of products.
* API endpoint /product should be used to manipulate a product catalog.
* Proper REST verbs (POST, GET, etc) should be used to in manipulate and access the catalog.
* The product catalog REST API should use JSON as a data format.
* Product itself should contain the following fields:
	* Name
	* Description
	* Price

### 2. Development of an application with a version control

**Goals:**

* Demonstrate how to use the Git version control to locally manage an application development process.
* Understand how to roll back changes to an application.

**Tasks:**

* Initialize a local git repository in your application’s directory.
* Add your application’s code to the version control.
* Perform some change to the codebase and then use git to rollback that change.

### 3. Working with version control branches

**Goals:**

* Demonstrate how to work with Git branches.

**Tasks:**

* Create a git branch to your application codebase.
* Add a readme.md markdown file with a documentation to your project (use your new branch for this purpose).
* After you finish working on your documentation, merge it back to your main/master branch.

### 4. Testing application

**Goals:**

* Demonstrate how to test REST application using Jest.
* Understand when to use unit tests and when REST API tests.

**Tasks:**

* Create tests verifying that the product JSON object returned by your REST API is a valid API response you expected to receive.
* Create unit test verifying the logic used to create the product instance returned by the API.
* Change something in your application and see how tests are failing to simulate regression happening to your application.

### 5. Logging

**Goals:**

* Understand how to log an application even to the standard output.
* Take advantage of the best logging 12 Factor logging practices.

**Tasks:**

* Whenever your application’s REST API is being called, log an appropriate information about this event.
* Use the standard output for logging.
* Use standard console.log utility for logging.
* Choose the right logging level for the given event.
* Verify that you can see a log line output in the console whenever a new REST API request event is handled by your application.