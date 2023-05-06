import gql from 'graphql-tag'

export default gql`
  input createUserInput {
    name: String!
    email: String!
  }

  extend type Mutation {
    createUser(input: createUserInput!): User! @auth
  }
`
