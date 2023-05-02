import { User } from '../../../models/User'
import { Resolver } from '../../../types'

type Args = {
  input: Omit<User, 'id'>
}

export const createUser: Resolver<User, Args> = async (
  _source,
  { input },
  { dataSources },
): Promise<User> => {
  return dataSources.userDataSource.createUser(input)
}
