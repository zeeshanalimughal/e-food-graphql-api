import mongoose from 'mongoose';

const CouponSchema = mongoose.Schema({
    BranchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: false },
    Title: { type: String, required: true, trim: true, unique: true },
    Image: { type: mongoose.Schema.Types.ObjectId, ref: "Gallery", required: true },
    UserCount: { type: Number, required: true },
    MaxCount: { type: Number, required: true },
    CouponType: { type: String, enum: ['percentage_of', 'amount_of'], required: true },
    MinimumApplicableAmount: { type: Number, required: true, trim: true },
    StartDate: { type: Date, default: null },
    EndDate: { type: Date, default: null },
    Status: { type: Boolean, default: false },
    DeletedAt: { type: Date, default: null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
}, { timestamps: true });

const Coupon = mongoose.model('Coupon', CouponSchema);

export default Coupon;