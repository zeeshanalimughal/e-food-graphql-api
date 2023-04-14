import { Item } from '../models';
import { createItemInputSchema, updateItemInputSchema, itemIdSchema } from '../graphql/schemas';
import Joi from "joi"
export const createItem = async (input) => {
    try {
        await Joi.validate(input, createItemInputSchema, { abortEarly: false });
        const item = new Item(input);
        await item.save();
        return item;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const updateItem = async (id, input) => {
    try {

        await Joi.validate({ id }, itemIdSchema, { abortEarly: false });
        await Joi.validate(input, updateItemInputSchema, { abortEarly: false });

        const item = await Item.findByIdAndUpdate(id, { $set: input }, { new: true });
        return item;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const deleteItem = async (id) => {
    try {
        await Joi.validate({ id }, itemIdSchema, { abortEarly: false });
        const item = await Item.findByIdAndDelete(id);
        return item;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getItems = async () => {
    const items = await Item.find();
    return items;
};

export const getItemById = async (id) => {
    try {
        await Joi.validate({ id }, itemIdSchema, { abortEarly: false });
        const item = await Item.findById(id);
        return item;
    } catch (err) {
        throw new Error(err.message);
    }
};
