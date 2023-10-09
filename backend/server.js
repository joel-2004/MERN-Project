const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const axios = require("axios");
const { colection } = require("./mongodb");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", cors(), (req, res) => {
    res.end("Home");
})
app.listen(5000, () => {
    console.log("listening at 5000");
})