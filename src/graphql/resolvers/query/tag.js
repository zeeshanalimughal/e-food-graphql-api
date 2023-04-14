import { TagService } from "../../../services";

const tagQueryResolvers = {

    Tags: async () => {
        try {
            const tags = await TagService.getTags();
            return tags;
        } catch (error) {
            throw new Error(`Error while fetching Tags: ${error.message}`);
        }
    },
    Tag: async (_, { id }) => {
        try {
            const tag = await TagService.getTagById(id);
            return tag;
        } catch (error) {
            throw new Error(`Error while fetching Tag: ${error.message}`);
        }
    },

};
module.exports = tagQueryResolvers;
