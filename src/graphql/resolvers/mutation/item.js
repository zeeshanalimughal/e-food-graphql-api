import { ItemService } from "../../../services";

const itemMutationResolvers = {

    CreateItem: async (_, { input }) => {
        try {
            const item = await ItemService.createItem(input);
            return item;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    UpdateItem: async (_, { id, input }) => {
        try {
            const item = await ItemService.updateItem(id, input);
            return item;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    DeleteItem: async (_, { id }) => {
        try {
            const item = await ItemService.deleteItem(id);
            return item;
        } catch (err) {
            throw new Error(err.message);
        }
    },
};

module.exports  =  itemMutationResolvers;
