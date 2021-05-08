//Dependencies
const express = require("express");
const cors = require("cors");

//import JSON files
const projects = require("./projects.json");
const about = require("./about.json")

//Create App object
const app = express();

//middleware
app.use(cors())

//home route to test app
app.get("/", (req, res) => {
    res.send("Hello World")
})

//route to get projects
app.get("/projects", (req, res) => {
    //send projects via JSON
    res.json(projects)
})

//route for getting about info
app.get("/about", (req, res) => {
    res.json(about)
})

//declare a variable for port
const PORT = process.env.PORT || 4000

//turn on the server listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`))