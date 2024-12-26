const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const ObjectId = mongoose.ObjectId;

const User = new Schema({
  username: { type: String, unique: true }, // to ensure that there is no duplicate mails
  password: String,
  name: String,
});
 
const Todo = new Schema({
  description: String,
  userId: ObjectId,
  done: Boolean,
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel,
};
