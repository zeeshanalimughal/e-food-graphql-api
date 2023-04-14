const { gql } = require("apollo-server");

const RoleType = gql`
  type Roletypes {
    id: ID!
    name: String!
    createdAt: String
    updatedAt: String
    isDisabled: Boolean
  }

  type RoletypesGlobal {
    id: ID!
    Rolename: String!
    createdAt: String
    updatedAt: String
    isDisabled: Boolean
  }

  type OtherRole {
    count: Int!
    otherRole: [Roletypes!]!
  }

  type ChangeRoleMessage {
    success: Boolean!
    message: String!
  }

  type OtherRoles {
    count: Int!
    otherRole: [RoletypesGlobal!]!
  }

  type DisableMessage {
    message: String!
  }

  type EnableMessage {
    message: String!
  }
`;

module.exports = {
  RoleType,
};
