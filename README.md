# Skolvikes

[![Build Status](https://travis-ci.org/mgeatz/Polling-App.svg?branch=master)](https://travis-ci.org/mgeatz/skolvikes) [![codecov](https://codecov.io/gh/mgeatz/skolvikes/branch/master/graph/badge.svg)](https://codecov.io/gh/mgeatz/skolvikes)
[![Maintainability](https://api.codeclimate.com/v1/badges/3d2ba17e824c8e583e98/maintainability)](https://codeclimate.com/github/mgeatz/skolvikes/maintainability)

Author: Michael Geatz 

## API KEY Required
Append the following URL query parameter to fetch data from AWS resources.

`?apiKey=<KEY PROVIDED IN EMAIL>`

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
Run single Unit test: `ng t`

Run Unit tests continuously: `npm run t`

Run end-to-end tests: `ng e2e`

### Running the App
Start up local server: `ng s`


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
