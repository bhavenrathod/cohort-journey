const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "bhavenlikeswebdev";
app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(`${req.method} request came`);
  next();
}

// localhost:3000
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html"); // returns the html file on the same domain
});

//signup
app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  // we should check if the user with this username already exists in the array
  res.json({
    message: "You have signed up",
  });
});

// signin
app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }
  if (!foundUser) {
    res.json({
      message: "Invalid credentials",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username: users[i].username,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "You are not logged in",
    });
  }
}

app.get("/me", logger, auth, function (req, res) {
  const currentUser = req.username;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === req.username) {
      foundUser = users[i];
    }
  }

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.post("/todo", logger, auth, function (req, res) {});
app.delete("/todo", logger, auth, function (req, res) {});
app.get("/todo", logger, auth, function (req, res) {});

app.listen(3000);
