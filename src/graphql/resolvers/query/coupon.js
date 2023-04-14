import { CouponService } from "../../../services";

const couponQueryResolvers = {

    Coupons: async () => {
        try {
            const coupons = await CouponService.getCoupons();
            return coupons;
        } catch (error) {
            throw new Error(error);
        }
    },
    Coupon: async (_, { id }) => {
        try {
            const coupon = await CouponService.getCouponById(id);
            return coupon;
        } catch (error) {
            throw new Error(error);
        }
    },
};


module.exports = couponQueryResolvers
