import { GalleryService } from "../../../services";

const galleryQueryResolvers = {

    Gallery: async (_, { id }) => {
        try {
            const gallery = await GalleryService.getGallery(id);
            return gallery;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    Galleries: async (_, { branchId }) => {
        try {
            const galleries = await GalleryService.getGalleries(branchId);
            return galleries;
        } catch (err) {
            throw new Error(err.message);
        }
    },

};

module.exports = galleryQueryResolvers;