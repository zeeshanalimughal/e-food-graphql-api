
const dealQueryResolvers = require('./query/deal')
const dealMutationResolvers = require('./mutation/deal')
export default {
    Query: {
        ...dealQueryResolvers
    },
    Mutation: {
        ...dealMutationResolvers
    },
};
