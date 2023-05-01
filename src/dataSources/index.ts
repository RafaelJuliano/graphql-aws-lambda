import { IGitHubDataSource } from './gitHubDataSource'
import { IUserDataSource } from './userDataSource'

export * from './impl'

export interface DataSources {
  userDataSource: IUserDataSource
  gitHubDataSource: IGitHubDataSource
}
