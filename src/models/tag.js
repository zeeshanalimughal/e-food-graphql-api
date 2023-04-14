import mongoose from 'mongoose';

const TagSchema = mongoose.Schema({
    Title: { type: String, required: true, unique: true, trim: true },
    DeletedAt: { type: Date, default: null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
}, { timestamps: true });

const Tag = mongoose.model('Tag', TagSchema);

export default Tag;