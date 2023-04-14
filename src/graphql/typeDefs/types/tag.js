const { gql } = require("apollo-server");

const TagType = gql`
    type Tag {
        _id: ID!
        Title: String!
        DeletedAt: String
        CreatedAt: String
        UpdatedAt: String
        CreatedBy: ID!
        UpdatedBy: ID!
        DeletedBy: ID
    }
    
    input CreateTagInput {
        Title: String!
        CreatedBy: ID!
        UpdatedBy: ID!
    }
    
    input UpdateTagInput {
        Title: String
        UpdatedBy: ID!
    }
`;

module.exports = {
    TagType,
};
