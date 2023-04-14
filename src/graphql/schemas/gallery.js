import Joi from "./joi";

const id = Joi.string().objectId().required();
const branchId = Joi.string().required();
const mediaUrl = Joi.string().required();
const mediaType = Joi.string().valid('image', 'video').required();
const deletedAt = Joi.string();
const createdBy = Joi.string().required();
const updatedBy = Joi.string().required();
const deletedBy = Joi.string();

export const gallerySchema = Joi.object({
    _id: id,
    BranchId: branchId,
    MediaUrl: mediaUrl,
    MediaType: mediaType,
    DeletedAt: deletedAt,
    CreatedBy: createdBy,
    UpdatedBy: updatedBy,
    DeletedBy: deletedBy,
    createdAt: Joi.string(),
    updatedAt: Joi.string(),
});

export const createGallerySchema = Joi.object({
    BranchId: branchId,
    MediaUrl: mediaUrl,
    MediaType: mediaType,
    CreatedBy: createdBy,
    UpdatedBy: updatedBy,
});

export const updateGallerySchema = Joi.object({
    MediaUrl: mediaUrl,
    MediaType: mediaType,
    UpdatedBy: updatedBy,
});


export const galleryIdSchema = Joi.object({
    id: Joi.string().objectId().required(),
});