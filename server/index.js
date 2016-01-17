var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var itemsControlller = require('./wishlist_items/items.controller')
//serve up our index.html
var clientDir = path.dirname(__dirname) + '/client';
var pathHomePage= path.format({
    root : "/",
    dir : clientDir,
    base : "index.html",
    ext : ".html",
    name : "file"
});

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(pathHomePage);
});

//Some thing abot grabbing the folder we will see about that

app.use('/bower_components',  express.static(clientDir + '/bower_components'));
app.use('/js',  express.static(clientDir + '/js'));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.post('/api/items', itemsControlller.create);
