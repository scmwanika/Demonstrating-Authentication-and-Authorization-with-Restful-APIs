const User = require("./models/user_model");
const Transaction = require("./models/transaction_model");

const resolvers = {
  // USER ROUTES:
  // get user by id
  getUser: async ({ id }) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (err) {
      throw new Error("Error retrieving User");
    }
  },
  // get all users
  getUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw new Error("Error retrieving Users");
    }
  },
  //create user
  createUser: async ({ role, name, email, password }) => {
    try {
      const user = new User({
        role,
        name,
        email,
        password,
        createdAt: new Date(),
      });
      await user.save();
      return user;
    } catch (err) {
      throw new Error("Error creating User");
    }
  },
  // update user by id
  updateUser: async ({ id, role, name, email, password }) => {
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { role, name, email, password },
        { new: true }
      );
      return user;
    } catch (err) {
      throw new Error("Error updating User");
    }
  },
  // delete user by id
  deleteUser: async ({ id }) => {
    try {
      const user = await User.findByIdAndDelete(id);
      return user;
    } catch (err) {
      throw new Error("Error deleting User");
    }
  },
  // TRANSACTION ROUTES:
  // get transaction by id
  getTransaction: async ({ id }) => {
    try {
      const transaction = await Transaction.findById(id);
      return transaction;
    } catch (err) {
      throw new Error("Error retrieving Transaction");
    }
  },
  // get all transactions
  getTransactions: async () => {
    try {
      const transactions = await Transaction.find();
      return transactions;
    } catch (err) {
      throw new Error("Error retrieving Transactions");
    }
  },
  // create transaction
  createTransaction: async ({
    userId,
    transactionType,
    product,
    quantity,
    unitCost,
  }) => {
    try {
      const transaction = new Transaction({
        userId,
        transactionType,
        product,
        quantity,
        unitCost,
        createdAt: new Date(),
      });
      await transaction.save();
      return transaction;
    } catch (err) {
      throw new Error("Error creating Transaction");
    }
  },
  // update transaction by id
  updateTransaction: async ({
    id,
    userId,
    transactionType,
    product,
    quantity,
    unitCost,
  }) => {
    try {
      const transaction = await Transaction.findByIdAndUpdate(
        id,
        { userId, transactionType, product, quantity, unitCost },
        { new: true }
      );
      return transaction;
    } catch (err) {
      throw new Error("Error updating Transaction");
    }
  },
  // delete transaction by id
  deleteTransaction: async ({ id }) => {
    try {
      const transaction = await Transaction.findByIdAndDelete(id);
      return transaction;
    } catch (err) {
      throw new Error("Error deleting Transaction");
    }
  },
};

module.exports = resolvers;
