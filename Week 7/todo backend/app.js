const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "bhavenrathod";
const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://bhavenrathod:URxPUf6tlrmgnuDK@cluster0.31t3k.mongodb.net/todo-app-database"
);

app.use(express.json());
app.post("/signup", async function (req, res, next) {
  // input validation
  const requiredBody = z.object({
    username: z.string().min(5).max(100).email(),
    password: z
      .string()
      .min(5)
      .max(100)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      ),
    name: z.string().min(5).max(100),
  });

  const parsedWithSuccess = requiredBody.safeParse(req.body);
  if (!parsedWithSuccess.success) {
    return res.json({
      message: "Incorrect Format",
      error: parsedWithSuccess.error,
    });
  }

  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
      username: username,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    console.log("Error in DB");

    return res.json({
      message: "User already exists",
    });
    errorThrown = true;
  }

  if (!errorThrown) {
    return res.json({
      message: "You are signed up",
    });
  }
});

app.post("/signin", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const user = await UserModel.findOne({
    username: username,
  });

  if (!user) {
    res.status(403).json({
      message: "User not found",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
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
