import Joi from "./joi";


const orderType = Joi.string().valid('DELIVERY', 'TAKE_AWAY', 'DINE_IN', 'ENTER_PHONE');

const paymentType = Joi.string().valid('CASH_ON_DELIVERY', 'CREDIT_DEBIT_CARD', 'STRIPE', 'PAYPAL').required();;

const orderStatus = Joi.string().valid('PAID', 'CANCELED', 'REJECTED', 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'DISPUTED', 'NOT_SUBMITTED');

const customerId = Joi.string().objectId().allow(null);
const branchId = Joi.string().objectId().required();
const items = Joi.array().items(Joi.string().objectId().required()).min(1);
const description = Joi.string().allow(null);
const totalAmount = Joi.number().required();
const createdAt = Joi.date().allow(null);
const updatedAt = Joi.date().allow(null);
const status = orderStatus.required();
const isPaid = Joi.boolean().default(false);
const deletedAt = Joi.date().allow(null);
const createdBy = Joi.string().objectId().required();
const updatedBy = Joi.string().objectId().required();
const deletedBy = Joi.string().objectId().allow(null);



export const createOrderSchema = Joi.object({
    CustomerId: customerId,
    BranchId: branchId,
    Items: items,
    OrderType: orderType.required(),
    Description: description,
    TotalAmount: totalAmount,
    CreatedAt: createdAt,
    UpdatedAt: updatedAt,
    Status: status,
    PaymentType: paymentType,
    IsPaid: isPaid,
    CreatedBy: createdBy,
    UpdatedBy: updatedBy,
});

export const updateOrderSchema = Joi.object({
    BranchId: branchId,
    Items: items,
    OrderType: orderType.required(),
    Description: description,
    TotalAmount: totalAmount,
    CreatedAt: createdAt,
    UpdatedAt: updatedAt,
    Status: status,
    PaymentType: paymentType,
    IsPaid: isPaid,
    UpdatedBy: updatedBy,
});


export const orderIdSchema = Joi.object().keys({
    id: Joi.string().objectId().required(),
});
