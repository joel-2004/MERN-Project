const mongose = require("mongoose");

mongose.connect("mongodb://0.0.0.0:27017/login").then(() => {
    console.log("Connected to db");
}).catch((e) => {
    console.log("Connection failed to db " + e);
})


const userSchema = new mongose.Schema({//Schema- format to store data 
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    password1: {
        type: String,
        required: true
    }
})


const toDoSchema = new mongose.Schema({

    text: {
        type: String,
        required: true
    }
})


const userCollection = mongose.model("user", userSchema);//a collection("user") inside the db that uses the schema("userSchema")
const toDoCollection = mongose.model("todo", toDoSchema);
const collection = {
    userCollection,
    toDoCollection
};
//to export several collections

module.exports = collection;