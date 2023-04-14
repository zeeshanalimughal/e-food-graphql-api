import { DealService } from "../../../services";

const dealMutationResolvers = {
    CreateDeal: async (_, { input }) => {
        try {
            const deal = await DealService.createDeal(input);
            return deal;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    UpdateDeal: async (_, { id, input }) => {
        try {
            const deal = await DealService.updateDeal(id, input);
            return deal;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    DeleteDeal: async (_, { id }) => {
        try {
            const deal = await DealService.deleteDeal(id);
            return deal;
        } catch (err) {
            throw new Error(err.message);
        }
    },
};

module.exports = dealMutationResolvers;
