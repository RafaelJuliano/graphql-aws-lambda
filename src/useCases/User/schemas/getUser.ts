import gql from 'graphql-tag'

export default gql`
  extend type Query {
    getUser(id: String!): User
  }
`
