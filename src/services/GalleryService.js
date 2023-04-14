import { Gallery } from '../models';
import { createGallerySchema, updateGallerySchema, galleryIdSchema } from '../graphql/schemas';
import Joi from 'joi';

export const createGallery = async (input) => {
    try {
        await Joi.validate(input, createGallerySchema, { abortEarly: false });
        const gallery = new Gallery(input);
        await gallery.save();
        return gallery;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const updateGallery = async (id, input) => {
    try {
        await Joi.validate({ id }, galleryIdSchema, { abortEarly: false });
        await Joi.validate(input, updateGallerySchema, { abortEarly: false });

        const gallery = await Gallery.findByIdAndUpdate(
            id,
            { $set: input },
            { new: true },
        );
        return gallery;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const deleteGallery = async (id, deletedBy) => {
    try {
        await Joi.validate({ id }, galleryIdSchema, { abortEarly: false });
        const gallery = await Gallery.findByIdAndUpdate(
            id,
            { $set: { deletedBy, deletedAt: new Date() } },
            { new: true },
        );
        return gallery;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getGallery = async (id) => {
    try {
        await Joi.validate({ id }, galleryIdSchema, { abortEarly: false });
        const gallery = await Gallery.findById(id);
        return gallery;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getGalleries = async (branchId) => {
    try {
        console.log(branchId)
        await Joi.validate({ id:branchId }, galleryIdSchema, { abortEarly: false });
        const galleries = await Gallery.find({ branchId });
        return galleries;
    } catch (err) {
        throw new Error(err.message);
    }
};
