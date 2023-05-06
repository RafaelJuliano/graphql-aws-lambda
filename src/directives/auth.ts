import { mapSchema, MapperKind, getDirective } from '@graphql-tools/utils'
import {
  GraphQLError,
  GraphQLResolveInfo,
  GraphQLSchema,
  Source,
  defaultFieldResolver,
} from 'graphql'

export const authDirectiveTransformer = (
  schema: GraphQLSchema,
  directiveName: string,
): GraphQLSchema => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: fieldConfig => {
      const authDirective = getDirective(schema, fieldConfig, directiveName)?.[0]

      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig
        return {
          ...fieldConfig,
          async resolve(
            source: Source,
            args: Apollo.OperationArgs,
            context: Apollo.Context,
            info: GraphQLResolveInfo,
          ) {
            const apiKey = context.headers['x-api-key']
            if (!apiKey || apiKey !== process.env.API_AUTH_TOKEN) {
              throw new GraphQLError('Unauthorized.', {
                extensions: {
                  code: 'UNAUTHORIZED',
                },
              })
            }
            return resolve(source, args, context, info)
          },
        }
      }
    },
  })
}
