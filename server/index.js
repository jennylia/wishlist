var express = require('express');
var app = express();
var path = require('path');
//serve up our index.html
app.get('/', function (req, res) {
    var pathHome= path.format({
        root : "/",
        dir : path.dirname(__dirname) + '/client',
        base : "index.html",
        ext : ".html",
        name : "file"
    });
    res.sendFile(pathHome);
});

//Some thing abot grabbing the folder we will see about that
//app.use('/static', express.static(__dirname + '/client'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
