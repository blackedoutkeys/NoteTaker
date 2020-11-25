//global variables and npm installs

const express = require("express");

//runs on local machine on port 3000
const PORT  = process.env.PORT || 3000;

const app = express();



// app.get("/", function(req, res){
// res.send("Server is up and running.");
// })

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(express.static('public'))

//these are the requirements for the routes
require('./routes/apiroutes.js')(app)

require('./routes/routes.js')(app)




//this listens and prints to make sure its running on the correct Port
app.listen(PORT, () => {
    console.log("Server is running on Port" + PORT);
});






