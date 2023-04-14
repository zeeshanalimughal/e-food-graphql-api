const { gql } = require("apollo-server");

const DealType = gql`
    type Deal {
        _id: ID!
        BranchId: ID!
        Title: String!
        Image: ID!
        NoOfOrder: Int!
        Amount: Float!
        NoOfItems: Int!
        CreatedBy: ID!
        UpdatedBy: ID!
        DeletedBy: ID
        createdAt: String
        updatedAt: String
    }
    
    input CreateDealInput {
        BranchId: ID!
        Title: String!
        Image: ID!
        NoOfOrder: Int!
        Amount: Float!
        NoOfItems: Int!
        CreatedBy: ID!
        UpdatedBy: ID!
    }
    
    input UpdateDealInput {
        Title: String
        Image: ID
        NoOfOrder: Int
        Amount: Float
        NoOfItems: Int
        UpdatedBy: ID!
    }

`;

module.exports = {
    DealType,
};
