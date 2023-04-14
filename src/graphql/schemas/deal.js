import Joi from "./joi";

const objectId = Joi.string().objectId();
const date = Joi.date().iso();
const number = Joi.number();
const string = Joi.string();
const float = Joi.number().precision(2);

const dealId = objectId.label('Deal Id');
const branchId = objectId.label('Branch Id');
const title = string.required().label('Title');
const image = objectId.label('Image Id');
const noOfOrder = number.integer().required().label('No Of Order');
const amount = float.required().label('Amount');
const noOfItems = number.integer().required().label('No Of Items');
const createdBy = objectId.required().label('Created By');
const updatedBy = objectId.required().label('Updated By');
const deletedBy = objectId.label('Deleted By').allow(null);
const createdAt = date.label('Created At');
const updatedAt = date.label('Updated At');
const deletedAt = date.allow(null).label('Deleted At');

export const dealSchema = Joi.object({
    _id: dealId,
    BranchId: branchId.required(),
    Title: title,
    Image: image.required(),
    NoOfOrder: noOfOrder,
    Amount: amount,
    NoOfItems: noOfItems,
    CreatedBy: createdBy,
    UpdatedBy: updatedBy,
    DeletedBy: deletedBy,
    createdAt: createdAt,
    updatedAt: updatedAt,
    DeletedAt: deletedAt,
});

export const createDealInputSchema = Joi.object({
    BranchId: branchId.required(),
    Title: title,
    Image: image.required(),
    NoOfOrder: noOfOrder,
    Amount: amount,
    NoOfItems: noOfItems,
    CreatedBy: createdBy,
    UpdatedBy: updatedBy,
});

export const updateDealInputSchema = Joi.object({
    Title: title,
    Image: image,
    NoOfOrder: noOfOrder,
    Amount: amount,
    NoOfItems: noOfItems,
    UpdatedBy: updatedBy.required(),
});


export const dealIdSchema = Joi.object({
    id: objectId.required().label("Object ID")
});

