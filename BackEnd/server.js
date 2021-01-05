const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://admin:1234@cluster0.xr2yz.mongodb.net/albums?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

var albumSchema = new Schema({
    cover: String,
    title: String,
    artist: String
})

var AlbumModel = mongoose.model("album", albumSchema);

app.get('/api/albums', (req, res) => {

    AlbumModel.find((err, data) => {
        res.json(data);

    })
})

app.get('/api/albums/:id', (req, res) => {
    AlbumModel.findById(req.params.id, (err, data) => {
        res.json(data)
    })
})

app.put('/api/albums/:id', (req, res) => {
    console.log("Update album: " + req.params.id);
    console.log(req.body);

    AlbumModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })

})

app.delete('/api/albums/:id', (req, res) => {
    console.log("Delete Album: " + req.params.id);

    AlbumModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.post('/api/albums', (req, res) => {
    console.log('Album received!');
    console.log(req.body.cover);
    console.log(req.body.title);
    console.log(req.body.artist);

    AlbumModel.create({
        cover: req.body.cover,
        title: req.body.title,
        artist: req.body.artist
    })

    res.send('Item added')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})