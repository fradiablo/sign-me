var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var album = new Schema ({
    title : String,
    artist : String,
    releaseDate : Date,
    label : String,
    rating : {type:Number, default: 0, max:5}
});

module.exports = mongoose.model('Album', album);