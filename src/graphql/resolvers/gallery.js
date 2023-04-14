
const galleryQueryResolvers = require('./query/gallery')
const galleryMutationResolvers = require('./mutation/gallery')
export default {
    Query: {
        ...galleryQueryResolvers
    },
    Mutation: {
        ...galleryMutationResolvers
    },
};
