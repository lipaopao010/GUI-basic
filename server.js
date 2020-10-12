// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
// import express JS module into app 
// and creates its variable. 
var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express(); 

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// Routes
// =============================================================
// Basic route that sends the user first to static public files, which will read the index.html file

app.use(express.static("public"));

app.get("/run", function(req, res) {

	// here is the function to execute csv files
	console.log("python test.exe --model_file 'block_model.csv' --blast_file 'blast_filename.csv'");
	
});


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() { 
	console.log("App listening on PORT: " + PORT);
}) 



