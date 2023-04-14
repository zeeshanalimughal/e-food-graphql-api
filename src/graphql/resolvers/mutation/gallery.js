import { GalleryService } from "../../../services";

const galleryMutationResolvers = {

    CreateGallery: async (_, { input }) => {
        try {
            const gallery = await GalleryService.createGallery(input);
            return gallery;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    UpdateGallery: async (_, { id, input }) => {
        try {
            const gallery = await GalleryService.updateGallery(id, input);
            return gallery;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    DeleteGallery: async (_, { id, deletedBy }) => {
        try {
            const gallery = await GalleryService.deleteGallery(id, deletedBy);
            return gallery;
        } catch (err) {
            throw new Error(err.message);
        }
    },
};

module.exports = galleryMutationResolvers;