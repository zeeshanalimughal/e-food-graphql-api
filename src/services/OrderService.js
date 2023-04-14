import { Order } from '../models';
import { orderIdSchema, createOrderSchema, updateOrderSchema } from '../graphql/schemas';
import Joi from "joi"

export const getOrders = async (branchId) => {
    try {
        await Joi.validate({ id: branchId }, orderIdSchema, { abortEarly: false });
        const orders = await Order.find({ BranchId: branchId }).populate('Items');
        return orders;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getOrderById = async (id) => {
    try {
        await Joi.validate({ id }, orderIdSchema, { abortEarly: false });
        const order = await Order.findById(id).populate('Items');
        return order;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createOrder = async (input) => {
    try {
        await Joi.validate(input, createOrderSchema, { abortEarly: false });

        const order = new Order(input);
        await order.save();
        return order;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateOrder = async (id, input) => {
    try {

        await Joi.validate({ id }, orderIdSchema, { abortEarly: false });
        await Joi.validate(input, updateOrderSchema, { abortEarly: false });

        const order = await Order.findByIdAndUpdate(
            id,
            { $set: input },
            { new: true },
        ).populate('Items');
        return order;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteOrder = async (id) => {
    try {
        await Joi.validate({ id }, orderIdSchema, { abortEarly: false });
        const result = await Order.findByIdAndDelete(id);
        return result !== null;
    } catch (error) {
        throw new Error(error.message);
    }
};
