const { gql } = require("apollo-server");

const CouponType = gql`
    type Coupon {
        _id: ID!
        BranchId: ID
        Title: String!
        Image: ID!
        UserCount: Int!
        MaxCount: Int!
        CouponType: CouponType!
        MinimumApplicableAmount: Float!
        StartDate: String
        EndDate: String
        Status: Boolean!
        DeletedAt: String
        CreatedBy: ID!
        UpdatedBy: ID!
        DeletedBy: ID
    }
    
    input CreateCouponInput {
        BranchId: ID
        Title: String!
        Image: ID!
        UserCount: Int!
        MaxCount: Int!
        CouponType: CouponType!
        MinimumApplicableAmount: Float!
        StartDate: String
        EndDate: String
        CreatedBy: ID!
        UpdatedBy: ID!
    }
    
    input UpdateCouponInput {
        BranchId: ID
        Title: String
        Image: ID
        UserCount: Int
        MaxCount: Int
        CouponType: CouponType
        MinimumApplicableAmount: Float
        StartDate: String
        EndDate: String
        Status: Boolean
        UpdatedBy: ID!
    }
    
    enum CouponType {
        percentage_of
        amount_of
    }
`;

module.exports = {
    CouponType,
};
