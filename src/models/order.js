import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    CustomerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    BranchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true },
    Items: { type: [mongoose.Schema.Types.ObjectId], ref: "Item", required: true },
    OrderType: { type: String, enum: ['DELIVERY', 'TAKE_AWAY', 'DINE_IN', 'ENTER_PHONE'], default: 'DELIVERY' },
    Description: { type: String, default: null, trim: true },
    TotalAmount: { type: Number, required: true, trim: true },
    Status: { type: String, enum: ['PAID', 'CANCELED', 'REJECTED', 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'DISPUTED', 'NOT_SUBMITTED'], default: 'PENDING' },
    PaymentType: { type: String, enum: ['CASH_ON_DELIVERY', 'CREDIT_DEBIT_CARD', 'STRIPE', 'PAYPAL'], default: 'CASH_ON_DELIVERY' },
    IsPaid: { type: Boolean, default: false },
    DeletedAt: { type: Date, default:null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default:null },
}, { timestamps: true })

const Order = mongoose.model('Order', OrderSchema);

export default Order;