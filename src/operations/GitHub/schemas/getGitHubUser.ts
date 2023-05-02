import gql from 'graphql-tag'

export default gql`
  extend type Query {
    getGitHubUser(login: String!): GitHubUser
  }
`
