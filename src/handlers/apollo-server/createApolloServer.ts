import { ApolloServer, BaseContext } from '@apollo/server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import gql from 'graphql-tag'
import { resolvers, schemas } from '../../operations'
import { authDirectiveTransformer } from '../../directives/auth'

export const createApolloServer = (): ApolloServer<BaseContext> => {
  const rootSchema = gql`
    directive @auth on FIELD_DEFINITION

    type Query
    type Mutation
  `

  const typeDefs = [rootSchema, ...schemas]

  let schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  schema = authDirectiveTransformer(schema, 'auth')

  return new ApolloServer({
    schema,
  })
}
