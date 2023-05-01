import userSchema from './schemas/user'
import { getUser } from './resolvers/getUser'
import getUserSchema from './schemas/getUser'

export default {
  resolvers: [
    {
      type: 'Query',
      name: 'getUser',
      resolver: getUser,
    },
  ],
  schemas: [userSchema, getUserSchema],
}
