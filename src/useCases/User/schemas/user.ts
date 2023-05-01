import gql from 'graphql-tag'

export default gql`
  type User {
    id: String!
    name: String!
    email: String!
  }
`
