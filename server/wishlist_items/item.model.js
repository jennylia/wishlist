/**
 *
 * Created by jlian on 2016-01-17.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('item', {
    name: String
});
