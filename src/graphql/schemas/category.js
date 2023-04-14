import Joi from "./joi";

const id = Joi.string()
    .objectId()
    .label("ID");

const branchId = Joi.string()
    .objectId()
    .label("Branch ID");

const title = Joi.string()
    .min(1)
    .max(200)
    .label("Title");

const status = Joi.boolean().label("Status");

const createdBy = Joi.string()
    .objectId()
    .label("Created By");

const updatedBy = Joi.string()
    .objectId()
    .label("Updated By");

const deletedBy = Joi.string()
    .objectId()
    .label("Deleted By");

const deletedAt = Joi.date().iso().label("Deleted At");

export const createCategorySchema = Joi.object().keys({
    BranchId: branchId.required(),
    Title: title.required(),
    Status: status,
    CreatedBy: createdBy.required(),
    UpdatedBy: updatedBy.required(),
});

export const updateCategorySchema = Joi.object().keys({
    Title: title,
    Status: status,
    UpdatedBy: updatedBy.required(),
});

export const categoryIdSchema = Joi.object().keys({
    id: id.required(),
});
