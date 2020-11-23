const express = require("express");

const PORT  = process.env.PORT || 3000;

const app = express();



app.get("/", function(req, res){
    res.send("Server is up and running.");
})

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(express.static('public'))

require('./routes/apiroutes.js')(app)

require('./routes/routes.js')(app)





app.listen(3000, () => {
    console.log("Server is running on Port" + PORT);
});






