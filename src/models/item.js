import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema({
    BranchesId: { type: [mongoose.Schema.Types.ObjectId], ref: "Branch", required: true },
    Title: { type: String, required: true, trim: true, unique: true },
    Images: { type: mongoose.Schema.Types.ObjectId, ref: "Gallery", required: true },
    Description: { type: String, default: null, trim: true },
    Tags: { type: [mongoose.Schema.Types.ObjectId], ref: "Tag", default: null },
    SKU: { type: String, required: true, unique: true, trim: true },
    Price: { type: Number, default: 0, trim: true },
    Category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    AdditionalImages: { type: [mongoose.Schema.Types.ObjectId], ref: "Gallery", required: true },
    OrderOfItems: { type: Number, default: 0 },
    DeletedAt: { type: Date, default:null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default:null }
}, { timestamps: true })

const Item = mongoose.model('Item', ItemSchema);

export default Item;