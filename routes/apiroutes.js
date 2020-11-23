const fs = require("fs");
const { stringify } = require("querystring");
const notes = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');
//Routes
function apiRoutes(app){
    app.get('/api/notes', function(req, res){
        res.json(notes);
    })
    
    //post request
    app.post('/api/notes', function(req,res){
        req.body.id = uuidv4();
        
        //console.log(req.body);
        //Push db.json into req.body
        notes.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
            if (err) throw err;
            res.json(notes);
        })
    })

    app.delete('/api/notes/:id', function(req, res){
        var id = req.params.id
        //for loop to splice off note, compares id with id in array object
        for (i = 0; i < notes.length; i++){
            if (id === notes[i].id){
                notes.splice(i,1)
            }
        }
        fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
            if (err) throw err;
            res.json(notes);
        })

    })

}
module.exports = apiRoutes;