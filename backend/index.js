const express = require("express");
const port = require("./config");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
})
app.listen(port, (req, res) => {
    console.log(`listening at ${port}`);
})



