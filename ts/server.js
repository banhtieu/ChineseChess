///<reference path='./node.d.ts' />
var express = require("express");
var application = express();
// configuration
application.use(express.static("./public"));
// listen to server
application.listen(3000);
