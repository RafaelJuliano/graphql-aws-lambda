import { GitHubRestDataSource, UserMongoDataSource } from '../dataSources'

let userDataSourceInstance: UserMongoDataSource
let gitHubDataSourceInstance: GitHubRestDataSource

const instantiateClass = <T>(instance: T | undefined, constructor: { new (): T }): T => {
  if (!instance) instance = new constructor()
  return instance
}

export const getDataSources = () => {
  return {
    userDataSource: instantiateClass(userDataSourceInstance, UserMongoDataSource),
    gitHubDataSource: instantiateClass(gitHubDataSourceInstance, GitHubRestDataSource),
  }
}
