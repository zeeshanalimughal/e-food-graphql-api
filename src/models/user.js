const mongoose = require('mongoose');
const { compare, hash } = require("bcryptjs");
const { generateOTP } = require("../utils/generateOtp");

const addressSchema = new mongoose.Schema({
  Street: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Zip: { type: String, },
  Country: { type: String, required: true }
});

const userSchema = new mongoose.Schema(
  {
    FullName: String,
    PhoneNum: String,
    Password: String,
    BranchId: { type: mongoose.Schema.Types.ObjectId, default: null },
    Email: {
      type: String,
      validate: {
        validator: (Email) => User.doesntExist({ Email }),
        message: ({ val: Email }) => `Email has already been taken.`,
      },
    },
    EmailVerificationCode: { type: String, default: "", },
    OtpCode: { type: String, default: "", },
    OtpCodeExpiry: { type: Date, default: Date.now, },
    ShippingAddress: { type: addressSchema, required: true },
    BillingAddress: { type: addressSchema, required: true },
    FirstOrderAt: { type: Date, default: null },
    LoyaltyPoints: { type: Number, default: 0 },
    SocialPlatform: { type: [String], default: [] },
    Platform: { type: String, default: null },
    BlacklistedAt: { type: Date, default: null },
    BlacklistedBy: { type: mongoose.Schema.Types.ObjectId, default: null },
    Type: { type: String, enum: ['guest', 'registered'], default: 'guest' },
    DeletedAt: { type: Date, default:null },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, default: null },
    UpdatedBy: { type: mongoose.Schema.Types.ObjectId, default: null },
    DeletedBy: { type: mongoose.Schema.Types.ObjectId, default: null },
    IsVerified: { type: Boolean, default: false }
  },
  { timestamps: true });

userSchema.pre("save", async function () {
  if (this.isModified("Password")) {
    this.Password = await hash(this.Password, 10);
  }
});

userSchema.statics.doesntExist = async function (option) {
  return (await this.where(option).countDocuments()) === 0;
};

userSchema.methods.matchesPassword = function (Password) {
  return compare(Password, this.Password);
};

userSchema.methods.generateOtp = function () {
  const otpCode = generateOTP(); // Generate OTP code using your OTP generation logic.
  const expiry = new Date(Date.now() + 10 * 60 * 1000); // Set the OTP expiry to 10 minutes from now.
  this.OtpCode = otpCode;
  this.OtpCodeExpiry = expiry;
  return otpCode;
};

const User = mongoose.model("User", userSchema);

export default User;