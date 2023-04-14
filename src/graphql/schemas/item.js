import Joi from "./joi";


const itemBranches = Joi.array().items(Joi.string().objectId()).min(1);

const itemTitle = Joi.string().trim().min(1).max(255).required();

const itemDescription = Joi.string().trim().max(5000);

const itemTags = Joi.array().items(Joi.string().objectId());

const itemSKU = Joi.string().trim().max(255).required();

const itemPrice = Joi.number().positive().precision(2).required();

const itemCategory = Joi.string().objectId();

const itemGallery = Joi.string().objectId().required()

const itemAdditionalImages = Joi.array().items(Joi.string().objectId().required());

const itemOrderOfItems = Joi.number().integer().min(0).max(1000);

const itemDeletedAt = Joi.date().iso();

const itemCreatedAt = Joi.date().iso();

const itemUpdatedAt = Joi.date().iso();

const itemCreatedBy = Joi.string().objectId().required();

const itemUpdatedBy = Joi.string().objectId().required();

const itemDeletedBy = Joi.string().objectId();

export const createItemInputSchema = Joi.object({
    BranchesId: itemBranches.required(),
    Title: itemTitle,
    Images: itemGallery.required(),
    Description: itemDescription,
    Tags: itemTags,
    SKU: itemSKU,
    Price: itemPrice,
    Category: itemCategory.required(),
    AdditionalImages: itemAdditionalImages,
    OrderOfItems: itemOrderOfItems,
    CreatedBy: itemCreatedBy,
    UpdatedBy: itemUpdatedBy,
}).options({ abortEarly: false });

export const updateItemInputSchema = Joi.object({
    BranchesId: itemBranches,
    Title: itemTitle,
    Images: itemGallery,
    Description: itemDescription,
    Tags: itemTags,
    SKU: itemSKU,
    Price: itemPrice,
    Category: itemCategory,
    AdditionalImages: itemAdditionalImages,
    OrderOfItems: itemOrderOfItems,
    UpdatedBy: itemUpdatedBy.required(),
}).options({ abortEarly: false });


export const itemIdSchema = Joi.object({
    id: Joi.string().objectId().required(),
});
