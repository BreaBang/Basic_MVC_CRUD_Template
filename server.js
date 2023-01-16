//Step 1: Declare Variables
const express = require('express'); // Bringing express into use. Express is a javaScript framework used with Node. Node allows us to run javaScript on the computer instead of just in the browser. 
const app = express(); // Assigning Express to a variable so it's easier to use
const PORT = 5000; // Local Port
const mongoose = require('mongoose'); // Brining mongoose into use. Mongoose let's us talk to our database a little easier and structor our data. 

    //*Import functions/routes

//todo - Connect to Database

//Step 2: Set Middleware
app.set("view engine", "ejs") // Sets the View Engine to EJS. Our app's display. 
app.set(express.static("public")) // Files that won't change we'll put in the public folder.
app.use(express.urlencoded({extended: true})) // Makes sure that our app is handling form information and properly parsing it.


//todo - Set Routes

//Step 3: Start Server
app.listen(PORT, () => console.log('server running on port ${PORT}'))