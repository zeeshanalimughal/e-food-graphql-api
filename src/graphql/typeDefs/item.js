const { gql } = require("apollo-server");

export default gql`
    type Query {
        Items: [Item!]!
        Item(id: ID!): Item!
    }
    
    type Mutation {
        CreateItem(input: CreateItemInput!): Item!
        UpdateItem(id: ID!, input: UpdateItemInput!): Item!
        DeleteItem(id: ID!): Item!
    }
  
`;
