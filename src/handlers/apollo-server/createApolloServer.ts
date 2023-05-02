import { ApolloServer, BaseContext } from '@apollo/server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import gql from 'graphql-tag'
import { resolvers, schemas } from '../../operations'

export const createApolloServer = (): ApolloServer<BaseContext> => {
  const rootSchema = gql`
    type Query
    type Mutation
  `

  const typeDefs = [rootSchema, ...schemas]

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  return new ApolloServer({
    schema,
  })
}
