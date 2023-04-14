import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
    BranchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true },
    Title: { type: String, required: true, trim: true, unique: true },
    Status: { type: Boolean, default: true },
    DeletedAt: { type: Date, default: null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
}, { timestamps: true });

const Category = mongoose.model('Category', CategorySchema);

export default Category;