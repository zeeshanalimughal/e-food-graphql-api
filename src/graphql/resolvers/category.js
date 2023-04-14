
const categoryQueryResolvers = require('./query/category')
const categoryMutationResolvers = require('./mutation/category')
export default {
    Query: {
        ...categoryQueryResolvers
    },
    Mutation: {
        ...categoryMutationResolvers
    },
};
