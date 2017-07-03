var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var library = new Schema ({
    name : {type: String, default:"N/A"},
    albums: [{type: ObjectId, ref:'Album'}]
});

module.exports = mongoose.model('Library', library);