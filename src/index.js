const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
// create express app
const app = express();
// Setup server port
const port = 8080;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get("/", (req, res) => {
  res.send("Main page");
});
// Require user routes
const userRoutes = require("../src/routes/user.routes");
// using as middleware
app.use("/api/v1/users", userRoutes);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
