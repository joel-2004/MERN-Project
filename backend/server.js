const express = require("express");
const app = express();
const cors = require("cors");
const collection = require("./mongodb");
const toDoCollection = collection.toDoCollection;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
require("dotenv").config();

app.get("/todo", async (req, res) => {
    try {
        const todo = await toDoCollection.find({});
        res.status(200).json(todo);
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
        // console.log(`${req.body.inputValue} inserted`)
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

app.listen(process.env.PORT, () => {
    console.log("listening at 5000");
})
