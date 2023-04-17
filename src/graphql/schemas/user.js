import Joi from "./joi";





const Passwords = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


const objectId = Joi.string().objectId();

export const UserType = Joi.string().valid('guest', 'registered').label('UserType');

export const Address = Joi.object({
  Street: Joi.string().required(),
  City: Joi.string().required(),
  State: Joi.string().required(),
  Zip: Joi.string().allow(null),
  Country: Joi.string().required(),
}).label('Address');



export const User = Joi.object({
  FullName: Joi.string().required(),
  PhoneNum: Joi.string().required(),
  Password: Joi.string().allow(null),
  BranchId: Joi.string().objectId().allow(null),
  Email: Joi.string().email().required(),
  EmailVerificationCode: Joi.string().allow(null),
  OtpCode: Joi.string().allow(null),
  OtpCodeExpiry: Joi.date().allow(null),
  ShippingAddress: Address.required(),
  BillingAddress: Address.required(),
  FirstOrderAt: Joi.date().allow(null),
  LoyaltyPoints: Joi.number().integer().allow(null),
  SocialPlatform: Joi.array().items(Joi.string().allow('')),
  Platform: Joi.string().allow(null),
  BlacklistedAt: Joi.date().allow(null),
  BlacklistedBy: Joi.string().objectId().allow(null),
  Type: UserType.required(),
  CreatedAt: Joi.date().required(),
  UpdatedAt: Joi.date().required(),
  DeletedAt: Joi.date().allow(null),
  CreatedBy: Joi.string().objectId().allow(null),
  UpdatedBy: Joi.string().objectId().required(),
  DeletedBy: Joi.string().objectId().allow(null),
  IsVerified: Joi.boolean().required(),
  AccessToken: Joi.string().label("Access Token"),
}).label('User');

export const AddressInput = Joi.object({
  Street: Joi.string().required(),
  City: Joi.string().required(),
  State: Joi.string().required(),
  Zip: Joi.string().allow(null),
  Country: Joi.string().required(),
}).label('AddressInput');

export const CreateUserInput = Joi.object({
  FullName: Joi.string().required(),
  PhoneNum: Joi.string().required(),
  Password: Joi.string().required(),
  Email: Joi.string().email().required(),
  ShippingAddress: AddressInput.required(),
  BillingAddress: AddressInput.required(),
  CreatedBy: Joi.string().objectId().allow(null),
  UpdatedBy: Joi.string().objectId().allow(null),
}).label('CreateUserInput');


export const ChangePassword = Joi.string().regex(Passwords).required();

export const SignIn = Joi.object().keys({
  Email: Joi.string().email().required(),
  Password: Joi.string().required(),
  AccessToken: Joi.string().label("Access Token"),
});

export const DeleteUser = Joi.object().keys({
  id: objectId.required().label("User ID"),
});

export const UpdateUserInput = Joi.object({
  FullName: Joi.string(),
  PhoneNum: Joi.string(),
  EmailVerificationCode: Joi.string().allow(null),
  ShippingAddress: AddressInput,
  BillingAddress: AddressInput,
  OtpCode: Joi.string().allow(null),
  OtpCodeExpiry: Joi.date().allow(null),
  FirstOrderAt: Joi.date().allow(null),
  LoyaltyPoints: Joi.number().integer().allow(null),
  SocialPlatform: Joi.array().items(Joi.string().allow('')),
  Platform: Joi.string().allow(null),
  IsVerified: Joi.boolean().allow(null),
  UpdatedBy: Joi.string().objectId().required(),
}).label('UpdateUserInput');

export const SignInInput = Joi.object({
  Email: Joi.string().required(),
  Password: Joi.string().required(),
}).label('UpdateUserInput');

export const usergIdSchema = Joi.object({
  id: objectId.required().label("User ID"),
});