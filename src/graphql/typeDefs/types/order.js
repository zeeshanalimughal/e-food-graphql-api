const { gql } = require("apollo-server");

const OrderType = gql`
        type Order {
            _id: ID!
            CustomerId: ID
            BranchId: ID!
            Items: [Item!]!
            OrderType: OrderType!
            Description: String
            TotalAmount: Float!
            CreatedAt: String
            UpdatedAt: String
            Status: OrderStatus!
            PaymentType: PaymentType!
            IsPaid: Boolean!
            DeletedAt: String!
            CreatedBy: ID!
            UpdatedBy: ID!
            DeletedBy: ID
        }
        
        input CreateOrderInput {
            CustomerId: ID
            BranchId: ID!
            Items: [ID!]!
            OrderType: OrderType!
            Description: String
            TotalAmount: Float!
            Status: OrderStatus!
            PaymentType: PaymentType!
            CreatedBy: ID!
            UpdatedBy: ID!
        }

             
        input UpdateOrderInput {
            BranchId: ID!
            Items: [ID!]!
            OrderType: OrderType!
            Description: String
            TotalAmount: Float!
            Status: OrderStatus!
            PaymentType: PaymentType!
            UpdatedBy: ID!
        }
        
        
        enum OrderType {
            DELIVERY
            TAKE_AWAY
            DINE_IN
            ENTER_PHONE
        }
        
        enum OrderStatus {
            PAID
            CANCELED
            REJECTED
            PENDING
            IN_PROGRESS
            COMPLETED
            DISPUTED
            NOT_SUBMITTED
        }
        
        enum PaymentType {
            CASH_ON_DELIVERY
            CREDIT_DEBIT_CARD
            STRIPE
            PAYPAL
        }
  
`;

module.exports = {
    OrderType,
};
