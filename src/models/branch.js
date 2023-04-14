import mongoose from 'mongoose';

const PinSchema = new mongoose.Schema({
    Lat: { type: Number, required: true },
    Lng: { type: Number, required: true }
});

const TimeSchema = new mongoose.Schema({
    Monday: { Open: { type: Date, required: true }, Close: { type: Date, required: true } },
    Tuesday: { Open: { type: Date, required: true }, Close: { type: Date, required: true } },
    Wednesday: { Open: { type: Date, required: true }, Close: { type: Date, required: true } },
    Thursday: { Open: { type: Date, required: true }, Close: { type: Date, required: true } },
    Friday: { Open: { type: Date, required: true }, Close: { type: Date, required: true } },
    Saturday: { Open: { type: Date, required: true }, Close: { type: Date, required: true } },
    Sunday: { Open: { type: Date, required: true }, Close: { type: Date, required: true } }
});

const statusEnum = ['DISABLED', 'PENDING', 'COMMING_SOON', 'ACTIVE'];


const BranchSchema = new mongoose.Schema({
    Title: { type: String, required: true, trim: true },
    BranchCode: { type: String, required: true, trim: true },
    Email: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: (Email) => Branch.doesntExist({ Email }),
            message: ({ val: Email }) => `Email has already been taken.`,
        },
    },
    Phone: { type: [String], required: true, trim: true },
    WebsiteUrl: { type: String, required: true, trim: true },
    Pin: { type: PinSchema, required: true },
    OpeningClosingTime: { type: TimeSchema, required: true },
    Address: { type: Object, required: true },
    Status: { type: String, enum: statusEnum, default: 'PENDING' },
    Timezone: { type: String, required: true },
    DeletedAt: { type: Date, default: null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
}, { timestamps: true });

BranchSchema.statics.doesntExist = async function (option) {
    return (await this.where(option).countDocuments()) === 0;
};

const Branch = mongoose.model("Branch", BranchSchema);

export default Branch;