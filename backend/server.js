const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const axios = require("axios");
const { collection } = require("./mongodb");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", cors(), (req, res) => {
    res.end("Home");
})

app.post("/signup", async (req, res) => {

    try {
        console.log("inside server.js");
        const form = req.body.form;
        const data = {
            name: form.name,
            password: form.password,
            password1: form.password2
        };
        console.log(data);
        const checkUser = await collection.findOne({ name: data.name });//to check if the name is present
        console.log(checkUser);
        if (checkUser) {
            res.json({ exist: true });
            await collection.insertMany([data]);
        }
    } catch (error) {
        console.log(error);

    }
})
app.listen(5000, () => {
    console.log("listening at 5000");
})