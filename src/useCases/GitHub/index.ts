import gitHubUserSchema from './schemas/gitHubUser'
import { getGitHubUser } from './resolvers/getGitHubUser'
import getGitHubUserSchema from './schemas/getGitHubUser'

export default {
  resolvers: [
    {
      type: 'Query',
      name: 'getGitHubUser',
      resolver: getGitHubUser,
    },
  ],
  schemas: [gitHubUserSchema, getGitHubUserSchema],
}
