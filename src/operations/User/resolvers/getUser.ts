import { User } from '../../../models/User'

type Args = {
  id: string
}

export const getUser: Apollo.Resolver<User, Args> = async (
  _source,
  { id },
  { dataSources },
): Promise<User> => {
  try {
    console.log('Geting user', {
      operation: 'getUser',
      id,
    })
    return dataSources.userDataSource.getUser(id)
  } catch (error) {
    console.log(error.message, {
      operation: 'getUser',
      error,
    })
  }
}
