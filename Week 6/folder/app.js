const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "bhavenlikeswebdev";

app.use(express.json());

const users = [];

// by using the stateful tokens

// function generateToken() {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];

//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     // use a simple function here
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }

// app.post("/signup", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (users.find((u) => u.username === username)) {
//     res.json({
//       message: "You are already signedup",
//     });
//     return;
//   }

//   users.push({
//     username: username,
//     password: password,
//   });

//   res.json({
//     message: "You are signedup",
//   });

//   console.log(users);
// });

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;
//   // check if users exist in the array or not
//   let foundUser = null;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].username == username && users[i].password == password) {
//       foundUser = users[i];
//     }
//   }

//   if (foundUser) {
//     const token = generateToken();
//     foundUser.token = token;
//     res.json({
//       token: token,
//     });
//   } else {
//     res.status(403).send({
//       message: "Invalid username or password",
//     });
//     console.log(users);
//   }
// });

// app.get("/me", function (req, res) {
//   const token = req.headers.authorization;
//   const user = users.find((user) => user.token === token);

//   if (user) {
//     res.json({
//       username: user.username,
//       password: user.password,
//     });
//   } else {
//     res.status(401).send({
//       message: "Unauthorized",
//     });
//   }
// });

// by using the JSON Web Tokens
app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "You are already signedup",
    });
    return;
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signedup",
  });

  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  // check if users exist in the array or not
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = jwt.sign({ username: username }, JWT_SECRET); // cover the username over to a jwt

    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
    console.log(users);
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  const username = decodedInfo.username;
  const user = users.find((user) => user.username === username);

  if (user) {
    res.json({
      username: user.username,
      password: user.password,
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
});

app.listen(3000);
