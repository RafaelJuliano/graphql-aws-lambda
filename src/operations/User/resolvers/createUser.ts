import { User } from '../../../models/User'

type Args = {
  input: Omit<User, 'id'>
}

export const createUser: Apollo.Resolver<User, Args> = async (
  _source,
  { input },
  { dataSources },
): Promise<User> => {
  try {
    console.log('Creating user', {
      operation: 'createUser',
      user: input,
    })
    return dataSources.userDataSource.createUser(input)
  } catch (error) {
    console.log(error.message, {
      operation: 'createUser',
      error,
    })
  }
}
