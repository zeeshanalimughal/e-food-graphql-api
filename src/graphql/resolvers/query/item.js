import { ItemService } from "../../../services";

const itemQueryResolvers = {

    Items: async () => {
        try {
            const items = await ItemService.getItems();
            return items;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    Item: async (_, { id }) => {
        try {
            const item = await ItemService.getItemById(id);
            return item;
        } catch (err) {
            throw new Error(err.message);
        }
    },

};

module.exports = itemQueryResolvers;
