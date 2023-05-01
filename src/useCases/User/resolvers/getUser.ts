import { User } from '../../../models/User'
import { Resolver } from '../../../types'

export const getUser: Resolver<User> = async (
  _source,
  _args,
  _context,
): Promise<User> => {
  return {
    id: '123',
    name: 'John Smith',
    email: 'smith@mail.com',
  }
}
