import mongoose from 'mongoose';

const GallerySchema = mongoose.Schema({
    BranchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true },
    MediaUrl: { type: String, required: true },
    MediaType: { type: String, enum: ['image', 'video'], default: 'image' },
    DeletedAt: { type: Date, default: null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
}, { timestamps: true });

const Gallery = mongoose.model('Gallery', GallerySchema);

export default Gallery;