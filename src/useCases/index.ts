import userOperations from './User'
import { Resolver } from '../types'

function getResolvers(): {
  type: string
  name: string
  resolver: Resolver<unknown>
}[] {
  return [...userOperations.resolvers]
}

function getSchemas() {
  return [...userOperations.schemas]
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
