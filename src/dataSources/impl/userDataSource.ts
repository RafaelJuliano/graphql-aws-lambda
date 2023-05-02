import type { Collection } from 'mongodb'
import { v4 as uuidV4 } from 'uuid'
import { User } from '../../models/User'
import { UserDataSource } from '../userDataSource'
import { getCollection } from '../../providers/mongoDbProvider'

export class UserMongoDataSource implements UserDataSource {
  private collectionName = 'users'

  private mongoCollection: Collection<User>

  constructor() {
    this.mongoCollection = getCollection<User>(this.collectionName)
  }

  getUser(id: string): Promise<User> {
    return this.mongoCollection.findOne<User>({ id })
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const newUser = {
      id: uuidV4(),
      ...user,
    }
    return newUser
  }
}
