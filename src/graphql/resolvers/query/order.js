import { OrderService } from "../../../services";



const orderQueryResolvers = {

    Orders: async (_, { branchId }) => {
        try {
            const orders = await OrderService.getOrders(branchId);
            return orders;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    Order: async (_, { id }) => {
        try {
            const order = await OrderService.getOrderById(id);
            return order;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

module.exports = orderQueryResolvers