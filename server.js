var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

var db = mongoose.createConnection('mongodb://localhost/music-library');

var Album = require('./model/album');
var Library = require('./model/library');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

app.post('/album', function (req, res) {
    var album = new Album(req.body);
    album.save(function(err, savedAlbum) {
        if (err) {
            res.status(500).send({error:"Could not save album!"});
        } else {
            res.status(200).send(savedAlbum);
        }
    })
});

app.listen(3000, function() {
    console.log('First API running on port 3000');
});