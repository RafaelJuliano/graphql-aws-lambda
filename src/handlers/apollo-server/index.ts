import { handlerPath } from '../../utils/handler-resolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  memorySize: 128,
  environment: {
    GITHUB_API_BASE_URL: 'https://api.github.com',
    API_AUTH_TOKEN: '${ssm:/${self:provider.stage}/sls/api-auth-token}',
    MONGO_DB_URI: '${ssm:/${self:provider.stage}/sls/mongo-uri}',
    MONGO_DATABASE: 'test',
  },
  events: [
    {
      httpApi: {
        path: '/graphql',
        method: 'GET',
      },
    },
    {
      httpApi: {
        path: '/graphql',
        method: 'POST',
      },
    },
  ],
}
