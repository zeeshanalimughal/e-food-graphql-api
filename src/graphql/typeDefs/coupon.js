const { gql } = require("apollo-server");

export default gql`
        
type Query {
    Coupons: [Coupon!]!
    Coupon(id: ID!): Coupon
}

type Mutation {
    CreateCoupon(input: CreateCouponInput!): Coupon!
    UpdateCoupon(id:ID!,input: UpdateCouponInput!): Coupon!
    DeleteCoupon(id: ID!): Coupon!
}
`;
