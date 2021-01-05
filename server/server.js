require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { mongoURL } = require("./constants");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./routes/user"));

mongoose.connect(
  mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) throw err;
    console.log("Database connected");
  }
);

app.listen(process.env.PORT, () =>
  console.log(`Escuchando puerto ${process.env.PORT}`)
);
