import gql from "graphql-tag";

//Defning typeDefs
module.exports = gql`
  type Post {
    _id: ID!
    body: String!
    username: String!
    createdAt: String!
  }
  type Query {
    getPosts: [Post]
  }
`;
