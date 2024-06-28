const mongose = require("mongoose");
require("dotenv").config();

mongose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to db");
}).catch((e) => {
    console.log("Connection failed to db " + e);
})

const toDoSchema = new mongose.Schema({
    text: {
        type: String,
        required: true
    }
})


const toDoCollection = mongose.model("todo", toDoSchema);

const collection = {
    toDoCollection
};
//to export several collections

module.exports = collection;