const express = require("express");
const app = express();
// The app.use function specifies that all the route handlers after this line will take it as a middleware
// app.use(function (req, res) {
//   console.log("req resolved");
//   next();
// });

// this is the middleware function
let totalReq = 0;
function reqCount(req, res, next) {
  req.name = "Bhaven"; // modify the request
  totalReq = totalReq + 1;

  // ending the reques-response cycle
  //  if(){
  //       res.json({
  //       response: "I stopped your request",
  //     });
  //  }
  //  else{
  //     next();
  //  }

  console.log(`The total number of request are ${totalReq}`);
  next(); // calling the next middleware function in the stack
}

// real respose handler function
function realSumHandler(req, res) {
  // main logic
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  console.log(`Name is ${req.name}`);

  res.json({
    ans: parseInt(a + b),
  });
}

app.get("/sum", reqCount, realSumHandler);

app.listen("3000");
