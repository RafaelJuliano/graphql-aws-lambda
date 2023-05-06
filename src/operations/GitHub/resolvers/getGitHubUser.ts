import { GitHubUser } from '../../../dataSources/gitHubDataSource'

type Args = {
  login: string
}

export const getGitHubUser: Apollo.Resolver<GitHubUser, Args> = async (
  _source,
  { login },
  { dataSources },
): Promise<GitHubUser> => {
  return dataSources.gitHubDataSource.getUser(login)
}
