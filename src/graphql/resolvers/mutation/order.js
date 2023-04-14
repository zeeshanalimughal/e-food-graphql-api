import { OrderService } from "../../../services";



const orderMutationResolvers = {

    CreateOrder: async (_, { input }) => {
        try {
            const order = await OrderService.createOrder(input);
            return order;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    UpdateOrder: async (_, { id, input }) => {
        try {
            const order = await OrderService.updateOrder(id, input);
            return order;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    DeleteOrder: async (_, { id }) => {
        try {
            const result = await OrderService.deleteOrder(id);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

module.exports = orderMutationResolvers