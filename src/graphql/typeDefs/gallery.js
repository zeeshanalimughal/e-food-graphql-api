const { gql } = require("apollo-server");

export default gql`
    type Query {
        Gallery(id: ID!): Gallery!
        Galleries(branchId: ID!): [Gallery!]!
    }

    type Mutation {
        CreateGallery(input: CreateGalleryInput!): Gallery!
        UpdateGallery(id:ID!,input: UpdateGalleryInput!): Gallery!
        DeleteGallery(id: ID!, deletedBy: ID!): Gallery!
    }
`;
