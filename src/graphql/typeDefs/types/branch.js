const { gql } = require("apollo-server");

const BranchType = gql`

      enum Status {
        DISABLED
        PENDING
        COMMING_SOON
        ACTIVE
      }

      type Pin {
        Lat: Float!
        Lng: Float!
      }

      type OpeningClosingTime {
        Monday: DayTime!
        Tuesday: DayTime!
        Wednesday: DayTime!
        Thursday: DayTime!
        Friday: DayTime!
        Saturday: DayTime!
        Sunday: DayTime!
      }

      type DayTime {
        Open: String!
        Close: String!
      }

      type Address {
        Street: String!
        City: String!
        State: String!
        Country: String!
        Zip: String
      }

      input AddressInput {
        Street: String!
        City: String!
        State: String!
        Country: String!
        Zip: String
      }

      type Branch {
        _id: ID!
        Title: String!
        BranchCode: String!
        Email: String!
        Phone: [String!]!
        WebsiteUrl: String!
        Pin: Pin!
        OpeningClosingTime: OpeningClosingTime!
        Address:Address
        Status: Status!
        Timezone: String!
        DeletedAt: String!
        CreatedBy: ID!
        UpdatedBy: ID!
        DeletedBy: ID
      }

      input CreateBranchInput {
        Title: String!
        BranchCode: String!
        Email: String!
        Phone: [String!]!
        WebsiteUrl: String!
        Pin: PinInput!
        OpeningClosingTime: OpeningClosingTimeInput!
        Address:AddressInput
        Status: Status!
        Timezone: String!
        CreatedBy: ID!
        UpdatedBy: ID!
      }

      input PinInput {
        Lat: Float!
        Lng: Float!
      }

      input OpeningClosingTimeInput {
        Monday: DayTimeInput!
        Tuesday: DayTimeInput!
        Wednesday: DayTimeInput!
        Thursday: DayTimeInput!
        Friday: DayTimeInput!
        Saturday: DayTimeInput!
        Sunday: DayTimeInput!
      }

      input DayTimeInput {
        Open: String!
        Close: String!
      }

      input UpdateBranchInput {
        Title: String
        BranchCode: String
        Email: String
        Phone: [String!]
        WebsiteUrl: String
        Pin: PinInput
        OpeningClosingTime: OpeningClosingTimeInput
        Address:AddressInput
        Status: Status!
        Timezone: String
        UpdatedBy: ID!
      }
      
`;

module.exports = {
  BranchType,
};
