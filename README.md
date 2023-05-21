# GraphQL AWS Lambda

This repository contains an example project showcasing how to build a serverless GraphQL API using AWS Lambda. It leverages the power of GraphQL to efficiently handle data requests and integrates with AWS Lambda for scalable and serverless execution.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [SSM Configuration](#ssm-configuration)
4. [Local Deployment with Serverless](#local-deployment-with-serverless)
5. [GitHub Deployment](#github-deployment)
6. [GraphQL Queries and Mutations](#graphql-queries-and-mutations)
7. [Creating Lambdas with GraphQL](#creating-lambdas-with-graphql)
8. [Libraries Used](#libraries-used)
9. [License](#license)

## Introduction

The GraphQL AWS Lambda project provides a complete setup for building a serverless GraphQL API using AWS Lambda and Apollo Server. It demonstrates best practices for structuring the code, handling data sources, and implementing resolvers.

## Prerequisites

Before getting started with this project, ensure that you have the following prerequisites:

- Node.js (version 14.x or later)
- npm (Node Package Manager)
- AWS account credentials with appropriate permissions for deploying Lambda functions

## SSM Configuration

To run the project, you need to configure some keys in the AWS Systems Manager (SSM). These keys are:

- `/{stage}/sls/api-auth-token`: API authentication token
- `/{stage}/sls/mongo-uri`: MongoDB connection URI

Make sure to set the appropriate values for these keys based on your environment.

## Running the Project Locally

To run the project locally, you can use the `npm start --stage=dev` command. This will start the application in the `dev` stage, simulating the local environment.

Make sure you have installed the project dependencies by running `npm install` if you haven't done so already. Then, execute the following command:

```
npm start --stage=dev
```
Note: The `--stage=dev` flag specifies the stage to run the application in. You can modify the stage value according to your needs and the stages defined in your configuration.

Keep in mind that running the project locally may have some differences compared to the production environment. It's recommended to thoroughly test your application in both local and deployed environments to ensure consistent behavior.

## Local Deployment with Serverless

To deploy the project locally using Serverless, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Install the dependencies by running the command `npm install`.
3. Deploy the project locally using the command `npm run deploy -- --stage dev`. Replace `dev` with your desired stage name.

This will deploy the project locally and provide you with a local GraphQL endpoint for testing and development.

## GitHub Deployment

The project is also set up for deployment through GitHub Actions. The deployment workflow is triggered on every push to the `develop` branch. The workflow performs the following steps:

1. Checks out the repository code.
2. Sets up the Node.js environment.
3. Installs the project dependencies.
4. Configures the AWS credentials.
5. Deploys the project using the Serverless framework.

Ensure that you have set up the necessary secrets (`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`) in the GitHub repository settings to enable successful deployments.

## GraphQL Queries and Mutations

The GraphQL API exposed by this project provides the following queries and mutations:

### Queries

- `getUser(id: String!): User`: Retrieves a user by ID. Requires authentication.

### Mutations

- `createUser(input: createUserInput!): User`: Creates a new user. Requires authentication.

These queries and mutations demonstrate the usage of the `RestDataSource` and `MongoDataSource` data sources to interact with external REST APIs and MongoDB, respectively.

## Creating Lambdas with GraphQL

Creating Lambdas with GraphQL is made easier by using the `@as-integrations/aws-lambda` library. This library provides seamless integration between Apollo Server and AWS Lambda functions. It simplifies the process of building and deploying serverless GraphQL applications on AWS.

The main advantages of using `@as-integrations/aws-lambda` include:

- Serialization and deserialization of Lambda events and responses, allowing you to work with familiar JavaScript objects in your GraphQL resolution logic.
- Support for implementing resolvers and GraphQL schemas using Apollo

 Server within AWS Lambda functions.
- Automatic scalability and fault tolerance provided by AWS Lambda.
- Simplified GraphQL resolution logic with native JavaScript objects within the context of an AWS Lambda function.

By utilizing `@as-integrations/aws-lambda`, you can eliminate the complexity of managing server infrastructure for your GraphQL application and focus on your business logic and field resolutions. It enables you to easily build an efficient and scalable serverless GraphQL application using AWS Lambda.

For more information on how to use `@as-integrations/aws-lambda`, refer to the official documentation and the project's source code, which contains detailed examples and usage information.
