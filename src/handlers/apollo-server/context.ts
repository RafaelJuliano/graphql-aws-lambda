import { LambdaContextFunctionArgument, handlers } from '@as-integrations/aws-lambda'
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'
import { getDataSources } from '../../providers/dataSourcesProvider'

export default {
  context: async (
    args: LambdaContextFunctionArgument<
      handlers.RequestHandler<APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2>
    >,
  ): Promise<Partial<Apollo.Context>> => ({
    headers: args.event.headers,
    dataSources: getDataSources(),
  }),
}
