import { CategoryService } from "../../../services";

export const categoryMutationResolvers = {

    CreateCategory: async (_, { input }) => {
        try {
            return await CategoryService.createCategory(input);
        } catch (error) {
            throw new Error(`Error creating category: ${error.message}`);
        }
    },
    UpdateCategory: async (_, { id, input }) => {
        try {
            return await CategoryService.updateCategory(id, input);
        } catch (error) {
            throw new Error(`Error updating category with id ${id}: ${error.message}`);
        }
    },
    DeleteCategory: async (_, { id }) => {
        try {
            return await CategoryService.deleteCategory(id);
        } catch (error) {
            throw new Error(`Error deleting category with id ${id}: ${error.message}`);
        }
    },
};


module.exports = categoryMutationResolvers