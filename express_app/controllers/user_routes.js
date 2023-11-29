// IMPORT DEPENDENCIES
const express = require("express");
const User = require("../models/user_model");
const { jwt, secretKey, authenticateToken } = require("../auth");

// CREATE A ROUTER
const router = express.Router();

// PAGE TO LOGIN
router.get("/login", (req, res) => {
  res.render("loginPage");
});

// LOGIN IF PROFILE MATCH USER
router.post("/login", async (req, res) => {
  const users = await User.find();

  const { email, password } = req.body;

  // Find the user by email and password
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Generate a JWT token that expires in one second
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      secretKey,
      { expiresIn: "1s" }
    );

    // Set the token in the Authorization header and redirect to the authorized endpoint
    res.set("Authorization", `Bearer ${token}`);

    if (user.role === "General Manager")
      res.redirect(`/restful/api/v1/users?token=${encodeURIComponent(token)}`);

    if (user.role === "Purchases Officer" || user.role === "Sales Officer")
      res.redirect(
        `/restful/api/v1/transactions?token=${encodeURIComponent(token)}`
      );
  } else res.send("INVALID CREDENTIALS");
});

// CREATE USER
router.post("/users/new", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send("SAVED USER SUCCESSFULLY");
  } catch {
    res.send("FAILED TO SAVE USER, PLEASE TRY AGAIN.");
  }
});

// MATCH USERS (Officers) TO TRANSACTIONS
router.get("/users", authenticateToken, async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $lookup: {
          from: "transactions",
          localField: "_id",
          foreignField: "userId",
          as: "transactionDetails",
        },
      },
    ]);

    res.json(users);
  } catch (error) {
    res.status(400).send("FAILED TO DISPLAY PROCUREMENT ENTRIES");
  }
});

module.exports = router;
