/**
 * Created by jlian on 2016-01-17.
 */

var Item = require('./item.model')
module.exports.create = function(req,res){
    console.log(req.body);
    //console.log("hey hey");
    var item = new Item(req.body);
    item.save(function(err, result){

        if (err)
            throw err;

        console.log("coming from mongoose", result);
        res.json(result);
    });

}

module.exports.list = function(req,res){
    console.log(req.body);
    Item.find({}, function(err,res){
        console.log(arguments);
    })
}
