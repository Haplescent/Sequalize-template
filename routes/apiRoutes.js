const express = require("express");
const router = express.Router();
const path = require("path");
const db = require(path.resolve(__dirname, "../models"));

// get all todos
// adding more code
// changing config settings
router.get("/all", (req, res) => {
  db.Todo.findAll().then((todos) => res.send(todos));
});

// get single todo by id
router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  }).then((todo) => res.send(todo));
});

// post new todo
router.post("/new", (req, res) => {
  db.Todo.create({
    text: req.body.text,
  }).then((submitedTodo) => res.send(submitedTodo));
});

// delete todo
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

// edit a todo
router.put("/edit", (req, res) => {
  db.Todo.update(
    {
      text: req.body.text,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => res.send("success"));
});

module.exports = router;
