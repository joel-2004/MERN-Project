const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const axios = require("axios");
const collection = require("./mongodb");
const userCollection = collection.userCollection;
const toDoCollection = collection.toDoCollection;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/* (Not part of todo List)
app.get("/", cors(), (req, res) => {
    res.end("Home");
})

app.post("/signup", async (req, res) => {
    try {
        //console.log("inside server.js");
        const form = req.body.form;
        const data = {
            name: form.name,
            password: form.password,
            password1: form.password2
        };
        //console.log(data);
        const checkUser = await userCollection.findOne({ name: data.name });//to check if the name is present
        //console.log(checkUser);
        if (checkUser) {
            res.json("exist");
        }
        else {
            // console.log("Added in db");
            res.json("notexist");
            await userCollection.insertMany([data]);
        }
    } catch (error) {
        console.log(error);

    }
})

app.post("/login", async (req, res) => {
    const form = req.body.form;
    const data = {
        name: form.name,
        password: form.password
    }
    //console.log(form.name);
    console.log(data);
    try {
        const findUser = await userCollection.findOne({ name: data.name });

        console.log(findUser);
        if (findUser) {
            if (findUser.password === data.password) {
                res.json("Login");
            }
            else
                res.json("Incorrectpassword");
        }
        else {
            res.json("nouser");
        }
    } catch (e) {
        console.log(e);
    }
}) */

app.get("/todo", async (req, res) => {
    try {
        const todo = await toDoCollection.find({});
        res.json(todo);

    } catch (error) {
        console.log(error);
    }
})

app.post("/save", async (req, res) => {
    try {
        const newItem = new toDoCollection({
            text: req.body.inputValue
        })
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
        console.log(`${req.body.inputValue} inserted`)
    } catch (error) {
        console.log(error);
    }
})

app.delete("/todo/delete/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const deleteItem = await toDoCollection.deleteOne({ "_id": req.params.id });
    } catch (error) {
        console.log(error);
    }
})




app.put("/todo/update/:id", async (req, res) => {
    try {
        const updateItem = await toDoCollection.findByIdAndUpdate(req.params.id, { $set: req.body });

    } catch (error) {
        console.log(error);
    }
})

app.delete("/todo/deleteAll", async (req, res) => {
    try {
        const deleteAll = await toDoCollection.deleteMany({});
    } catch (error) {
        console.log(error);
    }
})

app.listen(5000, () => {
    console.log("listening at 5000");
})
