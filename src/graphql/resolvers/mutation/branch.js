import { BranchService } from "../../../services";


const branchMutationResolvers = {

    CreateBranch: async (_, { input }) => {
        try {
            const branch = await BranchService.createBranch(input);
            return branch;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    UpdateBranch: async (_, { id, input }) => {
        try {
            const branch = await BranchService.updateBranch(id, input);
            return branch;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    DeleteBranch: async (_, { id }) => {
        try {
            const branch = await BranchService.deleteBranch(id);
            return branch;
        } catch (err) {
            throw new Error(err.message);
        }
    },
};

module.exports = branchMutationResolvers;
