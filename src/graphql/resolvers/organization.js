
const organizationQueryResolvers =require('./query/organization')
const organizationMutationResolvers =require('./mutation/organization')
export default {
  Query: {
   ...organizationQueryResolvers
  },
  Mutation: {
 ...organizationMutationResolvers
  },
};
