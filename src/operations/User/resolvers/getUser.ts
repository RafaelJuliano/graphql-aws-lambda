import { User } from '../../../models/User'
import { Resolver } from '../../../types'

type Args = {
  id: string
}

export const getUser: Resolver<User, Args> = async (
  _source,
  { id },
  { dataSources },
): Promise<User> => {
  return dataSources.userDataSource.getUser(id)
}
