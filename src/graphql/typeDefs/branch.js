const { ApolloServer, gql } = require("apollo-server");
import { GraphQLEnumType } from "graphql";

export default gql`
  type Query {
    Branch(id: ID!): Branch
  }

  type Mutation {
    CreateBranch(input: CreateBranchInput!): Branch!
    UpdateBranch(id: ID!, input: UpdateBranchInput!): Branch!
    DeleteBranch(id: ID!): Branch!
  }

`;
