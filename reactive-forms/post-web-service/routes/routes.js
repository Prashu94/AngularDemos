var express = require("express");
var routing = express.Router();
var data = require("../public/javascripts/data")

routing.post('/login', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    console.log("request for log is received");
    var result = data.LoginUser(username, password);
    if(result){
        res.json({ "message": "User identified... Welcome " + result });
    }else{
        res.json("Invalid User... !");
    }
})

module.exports=routing;