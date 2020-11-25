//constant global variables

const fs = require("fs");
const path = require("path");

//Routes
module.exports = function (app) {

    //gets data from the notes from the HTMl
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })
    //gets data from the notes from the HTMl

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}