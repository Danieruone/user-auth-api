const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const app = express();

app.get("/user", function (req, res) {
  res.json("get user");
});

app.post("/user", function (req, res) {
  let body = req.body;

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    userDB.password = null;
    res.json({
      ok: true,
      user: userDB,
    });
  });
});

app.put("/user/:id", function (req, res) {
  let id = req.params.id;
  res.json({ id });
});

app.delete("/user", function (req, res) {
  res.json("deleter user");
});

module.exports = app;
