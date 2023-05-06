import type { APIGatewayProxyEventHeaders, Context as LambdaContext } from 'aws-lambda'
import { DataSources } from './dataSources'

export interface Context extends LambdaContext {
  headers: APIGatewayProxyEventHeaders
  dataSources: DataSources
}

export type OperationArgs = {
  [key: string]: unknown
}

export type Resolver<
  TOutput,
  TArgs = Record<string, unknown>,
  TSource extends object = object,
> = (source: TSource | undefined, args: TArgs, context: Context) => Promise<TOutput>

export as namespace Apollo
