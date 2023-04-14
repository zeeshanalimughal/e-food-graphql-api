const { gql } = require("apollo-server");

const CategoryType = gql`
    type Category {
        _id: ID!
        BranchId: ID!
        Title: String!
        Status: Boolean
        DeletedAt: String!
        CreatedBy: ID!
        UpdatedBy: ID!
        DeletedBy: ID!
    }
    
    input CreateCategoryInput {
        BranchId: ID!
        Title: String!
        Status: Boolean
        CreatedBy: ID!
        UpdatedBy: ID!
    }
    
    input UpdateCategoryInput {
        Title: String
        Status: Boolean
        UpdatedBy: ID!
    }
    
`;

module.exports = {
    CategoryType,
};
