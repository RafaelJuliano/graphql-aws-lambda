import { LambdaContextFunctionArgument, handlers } from '@as-integrations/aws-lambda'
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'
import { Context } from '../../types'
import { GitHubRestDataSource, UserDataSource } from '../../dataSources'

export default {
  context: async (
    args: LambdaContextFunctionArgument<
      handlers.RequestHandler<APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2>
    >,
  ): Promise<Partial<Context>> => {
    const { event } = args

    return {
      headers: event.headers,
      dataSources: {
        userDataSource: new UserDataSource(),
        gitHubDataSource: new GitHubRestDataSource(),
      },
    }
  },
}
