import { Deal } from '../models';
import { createDealInputSchema, updateDealInputSchema, dealIdSchema } from '../graphql/schemas';
import Joi from 'joi';

export const getDeals = async () => {
    const deals = await Deal.find();
    return deals;
};

export const getDealById = async (id) => {
    await Joi.validate({ id }, dealIdSchema, { abortEarly: false });

    const deal = await Deal.findById(id);
    return deal;
};

export const createDeal = async (input) => {

    await Joi.validate(input, createDealInputSchema, { abortEarly: false });
    const deal = new Deal(input);
    await deal.save();
    return deal;
};

export const updateDeal = async (id, input) => {

    await Joi.validate({ id }, dealIdSchema, { abortEarly: false });
    await Joi.validate(input, updateDealInputSchema, { abortEarly: false });

    const deal = await Deal.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true },
    );
    return deal;
};

export const deleteDeal = async (id) => {
    await Joi.validate({ id }, dealIdSchema, { abortEarly: false });
    const deal = await Deal.findByIdAndDelete(id);
    return deal;
};
