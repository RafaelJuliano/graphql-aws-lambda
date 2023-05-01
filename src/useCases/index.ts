import userOperations from './User'
import gitHubOperations from './GitHub'
import { Resolver } from '../types'

function getResolvers(): {
  type: string
  name: string
  resolver: Resolver<unknown>
}[] {
  return [...userOperations.resolvers, ...gitHubOperations.resolvers]
}

function getSchemas() {
  return [...userOperations.schemas, ...gitHubOperations.schemas]
}

function createResolvers() {
  const resolvers = {
    Query: {},
    Mutation: {},
  }

  getResolvers().forEach(({ type, name, resolver }) => {
    resolvers[type][name] = resolver
  })

  return resolvers
}

export const resolvers = createResolvers()
export const schemas = getSchemas()
