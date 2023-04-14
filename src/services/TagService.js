import { Tag } from '../models';
import { createTagSchema, updateTagSchema, tagIdSchema } from '../graphql/schemas';
import Joi from "joi"

export const getTags = async () => {
    const tags = await Tag.find();
    return tags;
};

export const getTagById = async (id) => {

    await Joi.validate({ id }, tagIdSchema, { abortEarly: false });
    const tag = await Tag.findById(id);
    if (!tag) {
        throw new Error(`Tag with id ${id} not found`);
    }
    return tag;
};

export const createTag = async (input) => {
    await Joi.validate(input, createTagSchema, { abortEarly: false });
    const createdTag = await Tag.create(input);
    return createdTag;
};

export const updateTag = async (id, input) => {
  
    await Joi.validate({ id }, tagIdSchema, { abortEarly: false });
    await Joi.validate(input, updateTagSchema, { abortEarly: false });

    const updatedTag = await Tag.findByIdAndUpdate(id, input, { new: true });
    if (!updatedTag) {
        throw new Error(`Tag with id ${id} not found`);
    }
    return updatedTag;
};

export const deleteTag = async (id) => {
    
    await Joi.validate({ id }, tagIdSchema, { abortEarly: false });
    const deletedTag = await Tag.findByIdAndDelete(id);
    if (!deletedTag) {
        throw new Error(`Tag with id ${id} not found`);
    }
    return deletedTag;
};
