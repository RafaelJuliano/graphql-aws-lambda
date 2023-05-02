import { GitHubDataSource } from './gitHubDataSource'
import { UserDataSource } from './userDataSource'

export * from './impl'

export interface DataSources {
  userDataSource: UserDataSource
  gitHubDataSource: GitHubDataSource
}
