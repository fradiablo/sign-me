var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

var db = mongoose.connect('mongodb://localhost/music-library');

var Album = require('./model/album');
var Library = require('./model/library');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

app.get('album', function (req, res) {
    var albumName = req.body.albumName ? req.body.albumName;
    
    Album.find({}, function(err, albums) {
        if (err) {
            res.status(500).send({error: "Could not fetch products!"});
        } else {
            res.send(albums);
        }
    });
});

app.post('/album', function (req, res) {
    var album = new Album();
    album.title = req.body.title;
    album.artist = req.body.artist;
    album.save(function(err, savedAlbum) {
        if (err) {
            res.status(500).send({error:"Could not save album!"});
        } else {
            res.send(savedAlbum);
        }
    });
});

app.listen(3000, function() {
    console.log('First API running on port 3000');
});