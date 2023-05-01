import { ApolloServer, BaseContext } from '@apollo/server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import gql from 'graphql-tag'
import { resolvers, schemas } from '../../useCases'

export const createApolloServer = (): ApolloServer<BaseContext> => {
  const rootSchema = gql`
    type Query
  `

  const typeDefs = [rootSchema, ...schemas]

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  return new ApolloServer({ schema })
}
