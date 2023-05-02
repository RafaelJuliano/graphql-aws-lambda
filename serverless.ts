import type { AWS } from '@serverless/typescript'
import { Ssm } from './infra'
import functions from './src/handlers'

const ssm = new Ssm()

const serverlessConfiguration: AWS = {
  service: 'graphql-aws-lambda',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-offline-ssm'],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    stage: '${opt:stage, "local"}',
    region: 'us-east-1',
    iam: {
      role: {
        statements: [...ssm.getAllRoles()],
      },
    },
    environment: {
      ENV: '${self:provider.stage}',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  functions,
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    'serverless-offline-ssm': {
      stages: ['local'],
      ssm: {
        '/local/sls/api-auth-token': 'test',
        '/local/sls/mongo-uri': 'mongodb://mongodb0.example.com:27017', // Add your local mongo uri
      },
    },
  },
}

module.exports = serverlessConfiguration
