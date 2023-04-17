const { gql } = require("apollo-server");

const userType = gql`
  type User {
      _id: ID
      FullName: String!
      PhoneNum: String!
      BranchId: ID
      Email: String!
      EmailVerificationCode: String
      OtpCode: String
      OtpCodeExpiry: String
      ShippingAddress: Address!
      BillingAddress: Address!
      FirstOrderAt: String
      LoyaltyPoints: Int!
      SocialPlatform: [String]
      Platform: String
      BlacklistedAt: String
      BlacklistedBy: ID
      Type: UserType!
      CreatedAt: String!
      UpdatedAt: String!
      DeletedAt: String!
      CreatedBy: ID
      UpdatedBy: ID!
      DeletedBy: ID
      IsVerified: Boolean!
      AccessToken: String!
  }

  type Address {
    Street: String!
    City: String!
    State: String!
    Zip: String
    Country: String!
  }

  input CreateUserInput {
    FullName: String!
    PhoneNum: String!
    Password: String!
    Email: String!
    ShippingAddress: AddressInput!
    BillingAddress: AddressInput!
    CreatedBy: ID
    UpdatedBy: ID
  }

  input SignInInput {
    Email: String!
    Password: String!
  }
  
  input UpdateUserInput {
    FullName: String
    PhoneNum: String
    Password: String
    EmailVerificationCode: String
    ShippingAddress: AddressInput
    BillingAddress: AddressInput
    OtpCode: String
    OtpCodeExpiry: String
    FirstOrderAt: String
    LoyaltyPoints: Int!
    SocialPlatform: [String]
    Platform: String
    IsVerified:Boolean
    UpdatedBy: ID!
  }

  enum UserType {
    guest
    registered
  }

  type ForgotPasswordResponse {
    success: Boolean!
    token: String
  }

  type ResetPasswordResponse {
    success: Boolean!
    token: String
  }

  type UpdateProfileResponse {
    success: Boolean!
    message: String!
  }

  type DeleteUserResponse {
    success: Boolean!
    message: String!
  }

  type UpdatePasswordResponse {
    success: Boolean!
    message: String!
  }

  type PasswordChangedResponse {
    success: Boolean!
    message: String!
  }

  type EmailVerfiedResponse {

    success: Boolean!
    message: String!
  }
`;

module.exports = {
  userType,
};
