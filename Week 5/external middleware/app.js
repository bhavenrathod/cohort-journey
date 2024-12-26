const express = require("express");
const app = express();

app.use(express.json()); // if we do not use this function then we get a huge error because we need to parse the data into json before sending it to the server

app.post("/sum", function (req, res) {
  console.log(req.body);

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({ ans: a + b });
});

app.listen(3000);
