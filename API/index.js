const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js")


//Middleware
app.use(cors());
app.use(express.json());

app.listen(3800, () => {
    console.log("Server listening on Port: 3800");
})