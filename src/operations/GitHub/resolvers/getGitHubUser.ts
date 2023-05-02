import { GitHubUser } from '../../../dataSources/gitHubDataSource'
import { Resolver } from '../../../types'

type Args = {
  login: string
}

export const getGitHubUser: Resolver<GitHubUser, Args> = async (
  _source,
  { login },
  { dataSources },
): Promise<GitHubUser> => {
  return dataSources.gitHubDataSource.getUser(login)
}
