const { gql } = require("apollo-server");

export default gql`
    type Query {
        Deals: [Deal!]!
        Deal(id: ID!): Deal
    }

    type Mutation {
        CreateDeal(input: CreateDealInput!): Deal!
        UpdateDeal(id: ID!, input: UpdateDealInput!): Deal!
        DeleteDeal(id: ID!): Deal!
    }
`;
