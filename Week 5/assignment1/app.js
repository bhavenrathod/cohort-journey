const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log(`The request name is ${req.method}`);
  console.log(`The route is ${req.url}`);
  console.log(`The hostname is ${req.hostname}`);
  console.log(new Date().toTimeString());

  next();
});

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ ans: a + b });
});
app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({ ans: a * b });
});
app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({ ans: a / b });
});
app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ ans: a - b });
});

app.listen(3000);
