import { DealService } from "../../../services";

const dealQueryResolvers = {

    Deals: async () => {
        try {
            const deals = await DealService.getDeals();
            return deals;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    Deal: async (_, { id }) => {
        try {
            const deal = await DealService.getDealById(id);
            return deal;
        } catch (err) {
            throw new Error(err.message);
        }
    },
};

module.exports = dealQueryResolvers;
