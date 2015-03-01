var http = require("https");
var express = require("express");
var fs = require("fs");

var option = {key: fs.readFileSync("server.key"),
              cert: fs.readFileSync("server.crt")};

var http_server = express();

http_server.use(express.static(__dirname+"/public/"));

var webserver = http.createServer(option, http_server).listen(8080);