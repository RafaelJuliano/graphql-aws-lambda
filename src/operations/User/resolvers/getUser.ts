import { User } from '../../../models/User'

type Args = {
  id: string
}

export const getUser: Apollo.Resolver<User, Args> = async (
  _source,
  { id },
  { dataSources },
): Promise<User> => {
  return dataSources.userDataSource.getUser(id)
}
