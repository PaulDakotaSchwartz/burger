// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
//Review the port convention for appropriateness
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// methodOverride for POST having ?_method=DELETE
app.use(methodOverride('_method'));


// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});