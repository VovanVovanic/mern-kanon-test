require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())

///middlwares
app.use(express.json({ extended: true }))

///routes registration


async function start() {
  try {
    await mongoose.connect(
    process.env.DB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    );
    app.listen(PORT, () => console.log(`started at ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
