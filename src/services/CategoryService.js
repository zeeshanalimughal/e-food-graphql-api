import Category from '../models/category.js';
import { createCategorySchema, updateCategorySchema, categoryIdSchema } from '../graphql/schemas'
import Joi from 'joi';

export const getAllCategories = async () => {
    const categories = await Category.find({});
    return categories;
};

export const getCategoryById = async (id) => {
    await Joi.validate({ id }, categoryIdSchema, { abortEarly: false });
    const category = await Category.findById(id);
    return category;
};

export const createCategory = async (input) => {
    await Joi.validate(input, createCategorySchema, { abortEarly: false });
    const category = new Category(input);
    const savedCategory = await category.save();
    return savedCategory;
};

export const updateCategory = async (id, input) => {

    await Joi.validate({ id }, categoryIdSchema, { abortEarly: false });
    await Joi.validate(input, updateCategorySchema, { abortEarly: false });

    const category = await Category.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true }
    );
    return category;
};

export const deleteCategory = async (id) => {
    await Joi.validate({ id }, categoryIdSchema, { abortEarly: false });
    const category = await Category.findByIdAndDelete(id);
    return category;
};
