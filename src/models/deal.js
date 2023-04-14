import mongoose from 'mongoose';

const DealSchema = mongoose.Schema({
    BranchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true },
    Title: { type: String, required: true, trim: true, unique: true },
    Image: { type: mongoose.Schema.Types.ObjectId, ref: "Gallery", required: true },
    NoOfOrder: { type: Number, required: true },
    Amount: { type: Number, required: true, trim: true },
    NoOfItems: { type: Number, required: true },
    DeletedAt: { type: Date, default: null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
}, { timestamps: true });

const Deal = mongoose.model('Deal', DealSchema);

export default Deal;