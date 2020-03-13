var express = require("express"),
		app = express(),
 bodyParser = require("body-parser"),
       path = require('path'),
    request = require("request"),
description = require("./projdesc.json"),
   mongoose = require("mongoose");

   var os = require('os');

var user_name = process.env.USER_portfolio;
var pass_word = process.env.PASS_portfolio;


// var testingvar = os.environ['USER_portfolio']


   const MongoClient = require("mongodb").MongoClient;
   const ObjectId = require("mongodb").ObjectID;


const CONNECTION_URL = `mongodb+srv://${user_name}:${pass_word}@cluster0-wtgf6.mongodb.net/test?retryWrites=true&w=majority`;
const DATABASE_NAME = "users";



app.use(express.static("public"));
app.use(express.static("Images"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// ;lakjfdas

var technologySchema = new mongoose.Schema({
	Image: String,
    Name: String,
	desc: String
});

var Technology = mongoose.model("Technology", technologySchema);

var database, collection;

app.listen(process.env.PORT || 3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("description");
        console.log("Connected to `" + DATABASE_NAME + "`!");
        
        
    });
});

app.get("/", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.render("home", {technologies: result});
    });
});





   
app.get("/about", function(req, res){
        res.render("about");        
            
    });

app.get("/interest", function(req, res){
    res.render("interest");        
        
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





