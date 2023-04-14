
const orderQueryResolvers = require('./query/order')
const orderMutationResolvers = require('./mutation/order')
export default {
    Query: {
        ...orderQueryResolvers
    },
    Mutation: {
        ...orderMutationResolvers
    },
};
