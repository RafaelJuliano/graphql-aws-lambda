import { User } from '../models/User'

export interface IUserDataSource {
  data: User[]
  getUser(id: string): Promise<User>
  createUser(user: Omit<User, 'id'>): Promise<User>
}
