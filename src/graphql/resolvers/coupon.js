
const couponQueryResolvers = require('./query/coupon')
const couponMutationResolvers = require('./mutation/coupon')
export default {
    Query: {
        ...couponQueryResolvers
    },
    Mutation: {
        ...couponMutationResolvers
    },
};
