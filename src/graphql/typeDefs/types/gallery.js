const { gql } = require("apollo-server");

const GalleryType = gql`
    type Gallery {
        _id: ID!
        BranchId: ID!
        MediaUrl: String!
        MediaType: String!
        DeletedAt: String!
        CreatedBy: ID!
        UpdatedBy: ID!
        DeletedBy: ID
        createdAt: String
        updatedAt: String
    }
    
    input CreateGalleryInput {
        BranchId: ID!
        MediaUrl: String!
        MediaType: String
        CreatedBy: ID!
        UpdatedBy: ID!
    }
    
    input UpdateGalleryInput {
        MediaUrl: String
        MediaType: String
        UpdatedBy: ID!
    }

`;

module.exports = {
    GalleryType,
};
