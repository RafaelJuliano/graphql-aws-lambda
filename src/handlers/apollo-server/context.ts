import { Context } from '../../types'
import { getDataSources } from '../../providers/dataSourcesProvider'

export default {
  context: async (): Promise<Partial<Context>> => ({
    dataSources: getDataSources(),
  }),
}
