import { couponIdSchema, createCouponSchema, updateCouponSchema } from "../graphql/schemas";
import { Coupon } from "../models";
import Joi from 'joi';

const createCoupon = async (input) => {
    try {
        await Joi.validate(input, createCouponSchema, { abortEarly: false });
        const coupon = new Coupon(input);
        await coupon.save();
        return coupon;
    } catch (err) {
        throw new Error(`Error creating coupon: ${err}`);
    }
};

const getCoupons = async () => {
    try {
        const coupons = await Coupon.find();
        return coupons;
    } catch (err) {
        throw new Error(`Error getting coupons: ${err}`);
    }
};

const getCouponById = async (id) => {
    try {
        await Joi.validate({ id }, couponIdSchema, { abortEarly: false });
        const coupon = await Coupon.findById(id);
        return coupon;
    } catch (err) {
        throw new Error(`Error getting coupon by ID: ${err}`);
    }
};

const updateCoupon = async (id, input) => {
    try {
        await Joi.validate({ id }, couponIdSchema, { abortEarly: false });
        await Joi.validate(input, updateCouponSchema, { abortEarly: false });
        const coupon = await Coupon.findByIdAndUpdate(
            id,
            { ...input },
            { new: true }
        );
        return coupon;
    } catch (err) {
        throw new Error(`Error updating coupon: ${err}`);
    }
};

const deleteCoupon = async (id) => {
    try {
        await Joi.validate({ id }, couponIdSchema, { abortEarly: false });
        const coupon = await Coupon.findByIdAndDelete(id);
        return coupon;
    } catch (err) {
        throw new Error(`Error deleting coupon: ${err}`);
    }
};

export { createCoupon, getCoupons, getCouponById, updateCoupon, deleteCoupon };
