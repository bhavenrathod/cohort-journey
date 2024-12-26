const express = require("express");
const { UserModel, TodoModel } = require("./db");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "bhavenrathod";

mongoose.connect(
  "mongodb+srv://bhavenrathod:xE2nDGY0UOucv3sO@cluster0.31t3k.mongodb.net/todo-app-database"
);

app.use(express.json());
app.post("/signup", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    username: username,
    password: password,
    name: name,
  });

  res.json({
    message: "You are signed up",
  });
});

app.post("/signin", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const user = await UserModel.findOne({
    username: username,
    password: password,
  });

  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid credentials",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    req.status(403).json({
      message: "Invalid credentials",
    });
  }
}

app.post("/todo", auth, async function (req, res) {
  const description = req.body.description;
  const userId = req.userId;
  const done = req.body.done;
  TodoModel.create({
    description,
    userId,
    done,
  });
  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId,
  });
  res.json({
    todos,
  });
});

app.listen(3000);
