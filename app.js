const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "./.env/config.env" });
const path = require("path");
const { connectDB } = require("./database/db");


// collection of form data
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb', extended: true }));
// public files
app.use(express.static(path.join(__dirname, "public")));
// setting view engine
app.set("view engine", "ejs");
// connecting database
connectDB();

// routes
const uploadRoute = require("./app/upload/route");
app.use(uploadRoute);

module.exports = app;
