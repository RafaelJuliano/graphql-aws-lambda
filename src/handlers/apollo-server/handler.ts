import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda'
import context from './context'
import { createApolloServer } from './createApolloServer'

const handler = startServerAndCreateLambdaHandler(
  createApolloServer(),
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  context,
)

export const main = handler
