import { User } from '../../models/User'
import { IUserDataSource } from '../userDataSource'

export class UserDataSource implements IUserDataSource {
  data: User[] = [
    {
      id: 'id-test',
      name: 'John Smith',
      email: 'smith@mail.com',
    },
  ]

  getUser(id: string): Promise<User> {
    return Promise.resolve(this.data.find(user => user.id === id))
  }

  createUser(user: Omit<User, 'id'>): Promise<User> {
    const newUser = {
      id: Math.random().toString(26),
      ...user,
    }
    this.data.push(newUser)
    return Promise.resolve(newUser)
  }
}
