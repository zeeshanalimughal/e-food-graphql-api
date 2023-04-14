import { CouponService } from "../../../services";

const couponMutationResolvers = {

    CreateCoupon: async (_, { input }) => {
        try {
            const coupon = await CouponService.createCoupon(input);
            return coupon;
        } catch (error) {
            throw new Error(error);
        }
    },
    UpdateCoupon: async (_, { id, input }) => {
        try {
            console.log(id,input)

            const coupon = await CouponService.updateCoupon(id, input);
            return coupon;
        } catch (error) {
            throw new Error(error);
        }
    },
    DeleteCoupon: async (_, { id }) => {
        try {
            const coupon = await CouponService.deleteCoupon(id);
            return coupon;
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = couponMutationResolvers