// IMPORTING DEPENDENCIES
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { startDatabase } = require("./database");
const schema = require("./schema");
const resolvers = require("./resolvers");

const { NODE_ENV, PORT } = process.env;

const app = express();

app.use(cors());

// HANDLEBARS THE VIEW TEMPLATE ENGINE
app.set("view engine", "hbs");

startDatabase();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// APP ROUTES
const User = require("./controllers/user_routes");
const Transaction = require("./controllers/transaction_routes");

const restfulapi = "/restful/api/v1";
const graphqlapi = "/graphql/api/v1";

if (NODE_ENV === "production") app.use(`${restfulapi}`, User);
app.use(`${restfulapi}`, Transaction);

app.use(
  `${graphqlapi}`,
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

// APP LISTEN TO REQUESTS
app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
