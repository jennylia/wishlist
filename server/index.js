var express = require('express');
var app = express();
var path = require('path');
//serve up our index.html
var clientDir = path.dirname(__dirname) + '/client';
var pathHomePage= path.format({
    root : "/",
    dir : clientDir,
    base : "index.html",
    ext : ".html",
    name : "file"
});


app.get('/', function (req, res) {
    console.log("clientdir", clientDir);
    res.sendFile(pathHomePage);
});

//Some thing abot grabbing the folder we will see about that
//app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use('/bower_components',  express.static(clientDir + '/bower_components'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
