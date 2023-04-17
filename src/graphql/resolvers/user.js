
import { generateToken } from "../../utils/generateToken";

const userQueryResolvers  =require('./query/user')
const userMutationResolvers  =require('./mutation/user')
export default {
  
  Query: {
  ...userQueryResolvers
  },
  Mutation: {
    ...userMutationResolvers
  },
};
