import type { APIGatewayProxyEventHeaders, Context as LambdaContext } from 'aws-lambda'

export interface Context extends LambdaContext {
  headers: APIGatewayProxyEventHeaders
}

export type OperationArgs = {
  [key: string]: unknown
}

export type Resolver<
  TOutput,
  TArgs = Record<string, unknown>,
  TSource extends object = object,
> = (source: TSource | undefined, args: TArgs, context: Context) => Promise<TOutput>
