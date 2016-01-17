var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var itemControlller = require('./wishlist_items/item.controller')
//serve up our index.html
var clientDir = path.dirname(__dirname) + '/client';
var mongoose = require('mongoose');
var pathHomePage= path.format({
    root : "/",
    dir : clientDir,
    base : "index.html",
    ext : ".html",
    name : "file"
});

mongoose.connect('mongodb://localhost:27017/wishlist');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(pathHomePage);
});


app.use('/bower_components',  express.static(clientDir + '/bower_components'));
app.use('/js',  express.static(clientDir + '/js'));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

//API
app.post('/api/items', itemControlller.create);
app.get('/api/items', itemControlller.list);
