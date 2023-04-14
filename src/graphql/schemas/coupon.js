import Joi from "./joi";

const id = Joi.string().objectId().label("ID");

const branchId = Joi.string().objectId().label("Branch ID");

const title = Joi.string().required().label("Title");

const image = Joi.string().objectId().label("Image");

const userCount = Joi.number().integer().min(0).label("User Count");

const maxCount = Joi.number().integer().min(0).label("Max Count");

const couponType = Joi.string().valid("percentage_of", "amount_of").required().label("Coupon Type");

const minimumApplicableAmount = Joi.number().min(0).label("Minimum Applicable Amount");

const startDate = Joi.date().allow("").label("Start Date");

const endDate = Joi.date().allow("").label("End Date");

const status = Joi.boolean().label("Status");

const deletedAt = Joi.date().allow("").label("Deleted At");

const createdBy = Joi.string().objectId().required().label("Created By");

const updatedBy = Joi.string().objectId().required().label("Updated By");

const deletedBy = Joi.string().objectId().label("Deleted By");

export const createCouponSchema = Joi.object({
    BranchId: branchId,
    Title: title,
    Image: image,
    UserCount: userCount,
    MaxCount: maxCount,
    CouponType: couponType,
    MinimumApplicableAmount: minimumApplicableAmount,
    StartDate: startDate,
    EndDate: endDate,
    CreatedBy: createdBy,
    UpdatedBy: updatedBy,
});

export const updateCouponSchema = Joi.object({
    BranchId: branchId,
    Title: title,
    Image: image,
    UserCount: userCount,
    MaxCount: maxCount,
    CouponType: couponType,
    MinimumApplicableAmount: minimumApplicableAmount,
    StartDate: startDate,
    EndDate: endDate,
    Status: status,
    UpdatedBy: updatedBy,
});

export const couponIdSchema = Joi.object({
    id: Joi.string().objectId().required().label("Coupon ID"),
});