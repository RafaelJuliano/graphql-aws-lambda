import userSchema from './schemas/user'
import { getUser } from './resolvers/getUser'
import { createUser } from './resolvers/createUser'
import getUserSchema from './schemas/getUser'
import createUserSchema from './schemas/createUser'

export default {
  resolvers: [
    {
      type: 'Query',
      name: 'getUser',
      resolver: getUser,
    },
    {
      type: 'Mutation',
      name: 'createUser',
      resolver: createUser,
    },
  ],
  schemas: [userSchema, getUserSchema, createUserSchema],
}
