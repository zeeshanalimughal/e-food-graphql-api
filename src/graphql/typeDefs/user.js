const { gql } = require('apollo-server');

import { GraphQLEnumType } from "graphql"

export default gql`

  enum Role{
    OrganizationUser
  }

  extend type Query {
    User(id: ID!): User!
    Users: [User!]!
  }

  input UserFilter {
    _id: String
    email: String
    organization: String
  }
  
  extend type Mutation {
    CreateUser(input: CreateUserInput!): User!

    UpdateUser(id: ID!, input: UpdateUserInput!): User!

    DeleteUser(id: ID!): User!

    ChangePassword(Password: String!, email: String!):PasswordChangedResponse!

    forgotPassword(email: String!): ForgotPasswordResponse!

    resetPassword(Email: String!, Otp: String!): ResetPasswordResponse!

    updatePassword(oldPassword: String!, newPassword: String!):UpdatePasswordResponse!
  }

`;
