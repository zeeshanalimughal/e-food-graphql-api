import { CategoryService } from "../../../services";

const categoryQueryResolvers = {

    Categories: async () => {
        try {
            return await CategoryService.getAllCategories();
        } catch (error) {
            throw new Error(`Error fetching categories: ${error.message}`);
        }
    },
    Category: async (_, { id }) => {
        try {
            return await CategoryService.getCategoryById(id);
        } catch (error) {
            throw new Error(`Error fetching category with id ${id}: ${error.message}`);
        }
    },
};

module.exports = categoryQueryResolvers