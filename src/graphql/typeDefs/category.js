const { gql } = require("apollo-server");

export default gql`
    type Query {
        Categories: [Category!]!
        Category(id: ID!): Category
    }

    type Mutation {
        CreateCategory(input: CreateCategoryInput!): Category!
        UpdateCategory(id: ID!, input: UpdateCategoryInput!): Category!
        DeleteCategory(id: ID!): Category!
    }

`;
