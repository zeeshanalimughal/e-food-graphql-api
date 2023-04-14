
const tagQueryResolvers = require('./query/tag')
const tagMutationResolvers = require('./mutation/tag')
export default {
    Query: {
        ...tagQueryResolvers
    },
    Mutation: {
        ...tagMutationResolvers
    },
};
