import { User } from '../models/User'

export interface UserDataSource {
  getUser(id: string): Promise<User>
  createUser(user: Omit<User, 'id'>): Promise<User>
}
