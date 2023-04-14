import { TagService } from "../../../services";

const tagMutationResolvers = {

    CreateTag: async (_, { input }) => {
        try {
            const tag = await TagService.createTag(input);
            return tag;
        } catch (error) {
            throw new Error(`Error while creating Tag: ${error.message}`);
        }
    },
    UpdateTag: async (_, { id, input }) => {
        try {
            const tag = await TagService.updateTag(id, input);
            return tag;
        } catch (error) {
            throw new Error(`Error while updating Tag: ${error.message}`);
        }
    },
    DeleteTag: async (_, { id }) => {
        try {
            const tag = await TagService.deleteTag(id);
            return tag;
        } catch (error) {
            throw new Error(`Error while deleting Tag: ${error.message}`);
        }
    },
};

module.exports =  tagMutationResolvers;
