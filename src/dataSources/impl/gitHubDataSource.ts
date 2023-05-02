import { RESTDataSource, RequestOptions } from '@apollo/datasource-rest'
import { FetcherResponse } from '@apollo/utils.fetcher'
import { GraphQLError } from 'graphql'
import { GitHubDataSource, GitHubUser } from '../gitHubDataSource'

export class GitHubRestDataSource extends RESTDataSource implements GitHubDataSource {
  override baseURL = process.env.GITHUB_API_BASE_URL || ''

  protected willSendRequest(_path, request) {
    request.headers.Accept = 'application/vnd.github+json'
  }

  protected errorFromResponse({
    parsedBody,
  }: {
    url: URL
    request: RequestOptions
    response: FetcherResponse
    parsedBody: {
      message: string
      code: string
    }
  }): Promise<GraphQLError> {
    throw new GraphQLError(parsedBody.message, {
      extensions: {
        code: parsedBody.code,
      },
    })
  }

  getUser = (login: string): Promise<GitHubUser> => this.get(`users/${login}`)
}
