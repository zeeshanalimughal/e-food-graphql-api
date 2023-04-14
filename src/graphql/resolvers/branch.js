
const branchQueryResolvers =require('./query/branch')
const branchMutationResolvers =require('./mutation/branch')
export default {
  Query: {
   ...branchQueryResolvers
  },
  Mutation: {
 ...branchMutationResolvers
  },
};
