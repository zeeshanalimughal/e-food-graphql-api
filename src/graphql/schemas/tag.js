import Joi from "./joi";

const objectId = Joi.string().objectId();

const tagTitle = Joi.string().trim().min(1).max(255).required();

export const tagSchema = Joi.object({
    _id: objectId,
    Title: tagTitle,
    DeletedAt: Joi.date().allow(null),
    CreatedAt: Joi.date().allow(null),
    UpdatedAt: Joi.date().allow(null),
    CreatedBy: objectId.required(),
    UpdatedBy: objectId.required(),
    DeletedBy: objectId.allow(null),
});

export const createTagSchema = Joi.object({
    Title: tagTitle,
    CreatedBy: objectId.required(),
    UpdatedBy: objectId.required(),
}).options({ abortEarly: false });

export const updateTagSchema = Joi.object({
    Title: tagTitle,
    UpdatedBy: objectId.required(),
}).options({ abortEarly: false });

export const tagIdSchema = Joi.object({
    id: objectId.required().label("Tag ID"),
});