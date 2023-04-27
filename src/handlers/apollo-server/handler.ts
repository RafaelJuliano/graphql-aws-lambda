import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServer, BaseContext } from '@apollo/server'
import gql from 'graphql-tag'
import {
  handlers,
  LambdaContextFunctionArgument,
  startServerAndCreateLambdaHandler,
} from '@as-integrations/aws-lambda'
import { Context } from '../../types'

const createApolloServer = (): ApolloServer<BaseContext> => {
  const typeDefs = gql`
    type Query {
      helloWorld: String!
    }
  `

  const resolvers = {
    Query: {
      helloWorld() {
        return 'hello world'
      },
    },
  }

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  return new ApolloServer({ schema })
}

const server = createApolloServer()

const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    context: async (
      args: LambdaContextFunctionArgument<
        handlers.RequestHandler<APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2>
      >,
    ): Promise<Partial<Context>> => {
      const { event } = args

      return {
        headers: event.headers,
      }
    },
  },
)

export const main = handler
