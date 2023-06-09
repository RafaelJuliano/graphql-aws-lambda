import gql from 'graphql-tag'

export default gql`
  type GitHubUser {
    login: String!
    id: Int!
    node_id: String!
    avatar_url: String!
    gravatar_id: String!
    url: String!
    html_url: String!
    followers_url: String!
    following_url: String!
    gists_url: String!
    starred_url: String!
    subscriptions_url: String!
    organizations_url: String!
    repos_url: String!
    events_url: String!
    received_events_url: String!
    type: String!
    site_admin: Boolean
    name: String!
    company: String!
    blog: String!
    location: String!
    email: String!
    hireable: Boolean
    bio: String!
    twitter_username: String!
    public_repos: Int!
    public_gists: Int!
    followers: Int!
    following: Int!
    created_at: String!
    updated_at: String!
  }
`
