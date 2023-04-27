import { handlerPath } from '../../utils/handler-resolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  memorySize: 128,
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
