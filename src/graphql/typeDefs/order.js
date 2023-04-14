const { gql } = require("apollo-server");

export default gql`
    extend type Query {
        Orders(branchId: ID!): [Order!]!
        Order(id: ID!): Order
    }
    
    extend type Mutation {
        CreateOrder(input: CreateOrderInput!): Order!
        UpdateOrder(id: ID!, input: UpdateOrderInput!): Order!
        DeleteOrder(id: ID!): Boolean!
    }
`;
