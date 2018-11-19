# Skolvikes

[![Build Status](https://travis-ci.org/mgeatz/Polling-App.svg?branch=master)](https://travis-ci.org/mgeatz/skolvikes) [![codecov](https://codecov.io/gh/mgeatz/skolvikes/branch/master/graph/badge.svg)](https://codecov.io/gh/mgeatz/skolvikes)


Author: Michael Geatz 

## Request Invite To Private Repositories
I can share private github repositories with you, if you'd like to see more elaborate projects. In your email
to me, please include which of the following projects you'd like temporary access to (based on you specific
code analysis intentions):
 
- Serverless (Alexa Skill, NodeJS Lambdas)
- ES6 (EmberJS, Angular, TypeScript)
- Shell and server
- NodeJS API (loopback w/ swagger)
- Pure JavaScript (ES5) algorithm (requires NDA signature)
- Java Blockchain
- Java API
- Adobe Experience Manager
- CSS library

Send an email to mgeatz01@gmail.com. Happy to share!


## Application System Architecture

- Front End: Angular 7 + Bootstrap grid
- API: AWS API Gateway (API Key & Usage Plan), with Serverless Resource integration
- Serverless Resource: AWS Lambda (NodeJS v8.10.0), with Back End access 
- Back End: AWS DynamoDB

## Project Setup

### Configure
`git clone https://github.com/mgeatz/skolvikes.git`
`npm install`

## Project Execution

### Running the Tests
Run Unit tests: `npm run t`
Run end-to-end tests: `ng e2e`

### Running the App
Fire up local server: `ng s`

## Using the App
On the home page, enter the API Key (emailed to you) and click the BEGIN button. 
