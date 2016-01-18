/**
 * Created by jlian on 2016-01-17.
 */

var Item = require('./item.model');
var _ = require('lodash');
module.exports.create = function(req,res){
    console.log(req.body);
    //console.log("hey hey");
    var item = new Item(req.body);
    item.save(function(err, result){

        if (err)
            throw err;

        console.log("coming from mongoose", result);
        res.json(result); // same as sent I guess
    });

}

module.exports.list = function(req,res){
    console.log(req.body);
    Item.find({}, function(err,data){
        /*
        * Angular's front end will do the plucking for you
        * They don't like it when you do this*/
        //var nameList = _.map(data, 'name');
        //console.log(nameList);
        res.send(data);

    })
}
