/**
 * Created by jlian on 2016-01-17.
 */
module.exports.create = function(req,res){
    console.log(req.body);
    console.log("hey hey");
    res.send(req.body);
}
