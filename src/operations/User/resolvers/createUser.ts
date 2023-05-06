import { User } from '../../../models/User'

type Args = {
  input: Omit<User, 'id'>
}

export const createUser: Apollo.Resolver<User, Args> = async (
  _source,
  { input },
  { dataSources },
): Promise<User> => {
  return dataSources.userDataSource.createUser(input)
}
