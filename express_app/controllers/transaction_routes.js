// IMPORT DEPENDENCIES
const express = require("express");
const Transaction = require("../models/transaction_model");
const { authenticateToken } = require("../auth");

// CREATE A ROUTER
const router = express.Router();

// CREATE TRANSACTION
router.post("/transactions/new", async (req, res) => {
  try {
    const newUser = new Transaction(req.body);
    await newUser.save();
    res.send("SAVED TRANSACTION SUCCESSFULLY");
  } catch {
    res.send("FAILED TO SAVE TRANSACTION, PLEASE TRY AGAIN.");
  }
});

// GET TOTAL COST OF EACH TRANSACTION
router.get("/transactions", authenticateToken, async (req, res) => {
  try {
    //
    const transactions = await Transaction.aggregate([
      {
        $project: {
          transactionType: 1,
          product: 1,
          totalCost: { $multiply: ["$quantity", "$unitCost"] },
        },
      },
    ]);

    res.json(transactions);
  } catch (error) {
    res.status(400).send("FAILED TO DISPLAY TRANSACTIONS");
  }
});

module.exports = router;
