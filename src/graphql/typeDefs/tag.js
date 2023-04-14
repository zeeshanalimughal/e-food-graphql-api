const { gql } = require("apollo-server");

export default gql`
    type Query {
        Tags: [Tag!]!
        Tag(id: ID!): Tag!
    }

    type Mutation {
        CreateTag(input: CreateTagInput!): Tag!
        UpdateTag(id: ID!, input: UpdateTagInput!): Tag!
        DeleteTag(id: ID!): Tag!
    }  
`;
