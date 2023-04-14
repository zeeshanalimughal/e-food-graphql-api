import { BranchService } from "../../../services";


const branchQueryResolvers = {
    Branch: async (_, { id }) => {
        try {
            const branch = await BranchService.getBranch(id);
            return branch;
        } catch (err) {
            throw new Error(err.message);
        }
    }
};

module.exports = branchQueryResolvers;
