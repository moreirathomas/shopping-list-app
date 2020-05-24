const express = require("express");
const cors = require("cors");

const db = require("./helpers/db");

const jwt = require("./helpers/jwt");

const itemsRouter = require("./routers/items.routes.js");
const usersRouter = require("./routers/users.routes");

const app = express();

app.use(express.json());
app.use(cors());

// connect to db
db.connectDB();

// use JWT for authentication
app.use(jwt());

// api routes
app.use(usersRouter, itemsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`⚙️  API running on port ${port}...`);
});
