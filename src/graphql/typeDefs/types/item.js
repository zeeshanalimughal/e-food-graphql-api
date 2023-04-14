const { gql } = require("apollo-server");

const ItemType = gql`
    type Item {
        _id: ID!
        BranchesId: [ID!]!
        Title: String!
        Images: Gallery!
        Description: String
        Tags: [ID!]
        SKU: String!
        Price: Float!
        Category: Category!
        AdditionalImages: [Gallery!]
        OrderOfItems: Int!
        DeletedAt: String!
        CreatedAt: String
        UpdatedAt: String
        CreatedBy: ID!
        UpdatedBy: ID!
        DeletedBy: ID
    }

    
    input CreateItemInput {
        BranchesId: [ID!]!
        Title: String!
        Images: ID!
        Description: String
        Tags: [ID!]
        SKU: String!
        Price: Float!
        Category: ID!
        AdditionalImages: [ID!]
        OrderOfItems: Int
        CreatedBy: ID!
        UpdatedBy: ID!
    }
    
    input UpdateItemInput {
        BranchesId: [ID!]
        Title: String
        Images: ID
        Description: String
        Tags: [ID!]
        SKU: String
        Price: Float
        Category: ID
        AdditionalImages: [ID!]
        OrderOfItems: Int
        UpdatedBy: ID!
    }
            
`;

module.exports = {
    ItemType,
};
