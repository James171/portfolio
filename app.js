var express = require("express"),
		app = express(),
 bodyParser = require("body-parser"),
       path = require('path'),
    request = require("request"),
description = require("./projdesc.json"),
   mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jfish15:DBmongo24!@cluster0-wtgf6.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
app.use(express.static("public"));
app.use(express.static("Images"));



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// ;lakjfdas

var technologySchema = new mongoose.Schema({
	Image: String,
    Name: String,
	desc: String
});

var Technology = mongoose.model("Technology", technologySchema);


// async functions await 
// const getDB = async function(){
// var users = new Technology();
//           var userData = []; // Created Empty Array
//          return await Technology.find({}, function(err, data) {
//             data.forEach(function(value) {
//               userData.push(value);
//             });
//           });
// }

// var Data = getDB().then(userData => {
//   console.log(userData)
// })
// .catch(err => console.error(err))






// In app.js:


// In index.js




app.get("/",  function(req, res){
    Technology.find({}, function(err, alltechrecords){
        if(err){
            console.log(err);
        }else{

            res.render("home", {technologies: alltechrecords});
        }
    
      // res.render("home"); 
});
});

   
app.get("/about", function(req, res){
        res.render("about");        
            
    });

app.get("/projects", function(req, res){
        res.render("projects/index", {config: description});        
            
    });


app.get("/projects/search", function(req, res){


        res.render("projects/search");        
            
    });

app.get("/projects/results", function(req, res){
    var query = req.query.search;
    request(`http://omdbapi.com/?s=${query}&apikey=thewdb`, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("projects/results", {data: data});
            
    }
    });
});





// app.get("/projects/:project", function(req, res){
//         var projectName = req.params.project;
//         console.log(projectName); 
//         res.render("projects/"+projectName+"")
//     });
    



app.listen(process.env.PORT || 3000, function(){
    console.log("The YelpCamp Server has Started!");
});

// app.listen(3000, function(){
//     console.log("The YelpCamp Server has Started!");
// });