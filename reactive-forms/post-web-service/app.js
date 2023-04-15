var express = require("express");
var app = express();
var router = require('./routes/routes.js');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use("/", router);

console.log("Server started a port 5400!");
app.listen(5400);