const express = require("express");
const { port, mongoDbURL } = require("./config");
const app = express();
const { mongoose } = require("mongoose");

app.get("/", (req, res) => {
    res.send("Hello world");
})


mongoose.connect(mongoDbURL).then(() => {
    console.log("success");
    app.listen(port, (req, res) => {
        console.log(`listening at ${port}`);
    })
}).catch((err) => {
    console.log(err);
});

