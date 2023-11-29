const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
    id: ID!
    role: String!
    name: String!
    email: String!
    password: String!
    createdAt: String!
  }
  
  type Transaction {
    id: ID!
    userId: String!
    transactionType: String!
    product: String!
    quantity: Int!
    unitCost: Int!
    createdAt: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]

    getTransaction(id: ID!): Transaction
    getTransactions: [Transaction]
  }

  type Mutation {
    createUser(role: String!, name: String!, email: String!, password: String!, createdAt: String!): User
    updateUser(id: ID!, role: String, name: String, email: String, password: String, createdAt: String): User
    deleteUser(id: ID!): User

    createTransaction(userId: String!, transactionType: String!, product: String!, quantity: Int!, unitCost: Int!, createdAt: String!): Transaction
    updateTransaction(id: ID!, userId: String, transactionType: String, product: String, quantity: Int, unitCost: Int, createdAt: String): Transaction
    deleteTransaction(id: ID!): Transaction
  }
`);

module.exports = schema;
