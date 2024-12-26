const express = require("express");
const app = express(); // instance of the express class

// '/' is the route path here and there is a call back function when the route is accessed
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/asd", function (req, res) {
  res.send("Hello World from asd");
});
app.post("/", function (req, res) {
  res.send("Hello World from post request");
});

app.listen(3000); // tells the server to listen for incoming requests on port 3000.
// When the server starts, it will be accessible at http://localhost:3000
