// IMPORT DEPENDENCIES
const mongoose = require("mongoose");
const { DATABASE } = process.env;

const startDatabase = function () {
  // CONNECT DATABASE
  mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .on("open", () => {
      console.log("Database successfully connected");
    })
    .on("error", (error) => {
      console.log(`Sorry! Database disconnected: ${error.message}`);
    });
};

module.exports = { startDatabase };
