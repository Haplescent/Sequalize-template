const express = require("express");
const router = express.Router();
const path = require("path");
const db = require(path.resolve(__dirname, "../models"));

// get all Users
// adding more code
// changing config settings
router.get("/all", (req, res) => {
  db.User.findAll().then((Users) => res.send(Users));
});

// get single User by id
router.get("/find/:id", (req, res) => {
  db.User.findAll({
    where: {
      id: req.params.id,
    },
  }).then((user) => res.send(user));
});

// post new User
router.post("/new", (req, res) => {
  db.User.create({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    title: req.body.title,
  }).then((submittedUser) => res.send(submittedUser));
});

// delete User
router.delete("/delete/:id", (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

// edit a User
router.put("/edit", (req, res) => {
  db.User.update(
    {
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      title: req.body.title,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => res.send("success"));
});

module.exports = router;
