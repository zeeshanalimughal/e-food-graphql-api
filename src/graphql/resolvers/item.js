
const itemQueryResolvers = require('./query/item')
const itemMutationResolvers = require('./mutation/item')
export default {
    Query: {
        ...itemQueryResolvers
    },
    Mutation: {
        ...itemMutationResolvers
    },
};
