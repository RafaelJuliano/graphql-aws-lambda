import type { APIGatewayProxyEventHeaders, Context as LambdaContext } from 'aws-lambda'

export interface Context extends LambdaContext {
  headers: APIGatewayProxyEventHeaders
}
