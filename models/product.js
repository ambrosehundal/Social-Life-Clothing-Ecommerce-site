

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Model Schema for items in the database
var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    color: {type: String}


});

module.exports = mongoose.model('Product', schema);
