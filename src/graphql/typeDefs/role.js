const { ApolloServer, gql } = require("apollo-server");
import { GraphQLEnumType } from "graphql";

export default gql`
  extend type Query {
    Role(id: ID!): Roletypes
    Roles: [Roletypes!]! 
    RoleUserCount(RoleName: String!):OtherRoles!
    GlobalRoleUserCount(RoleName: String!):OtherRole!
    GetOrganizationRoles:[RoletypesGlobal!]!
  }
  extend type Mutation {

    AssignRoleToAllUsers(
      roleName:String!
    ):ChangeRoleMessage


    AssignRoleToOrganizationUsers(
      roleName:String!
    ):ChangeRoleMessage

    CreateRole(
        name:String!
    ): Roletypes
    UpdateRole(
      id: ID!
       name:String!
    ): Roletypes



    ChangeRole(
      Userid:ID!
      roleName:String!
    ): ChangeRoleMessage


    GlobalDisable(
       Rolename:String!
    ):DisableMessage

    GlobalEnable(
      Rolename:String!
    ):EnableMessage

    DisableOrganizationRole(
     roleName:String!
    ):DisableMessage

    EnableOrganizationRole(
      roleName:String!
    ):EnableMessage
   
    DeleteRole(
      roleName:String!
    ):DisableMessage
    
  }
`;
