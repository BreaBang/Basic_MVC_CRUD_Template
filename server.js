//Step 1: Declare Variables
const express = require('express'); // Bringing express into use. Express is a javaScript framework used with Node. Node allows us to run javaScript on the computer instead of just in the browser. 
const app = express(); // Assigning Express to a variable so it's easier to use
const PORT = 6000; // Local Port
const mongoose = require('mongoose'); // Brining mongoose into use. Mongoose let's us talk to our database a little easier and structor our data. 

//Step 4: (After setting up the view and model) - Connect to Database
//Step 4.1 Go to config and add a file database.js - add connection function that will be called here in server.js

//Step 4.2 Import our env file and the function we created in database.js
const connectDB = require("./config/database") // Specifying where to get the function - it's in our config folder, the database file.
//Step 5.3 Tell the server where our router is.
const homeRoutes = require('./routes/home')
const editRoutes = require('./routes/edit')

require('dotenv').config({path: './config/.env'}) // Specifying where to get the environment vairables. 

//Step 4.3 Call the function we created in database.js
connectDB()

//Step 2: Set Middleware
app.set("view engine", "ejs") // Sets the View Engine to EJS. Our app's display. 
app.use(express.static("public")) // Files that won't change we'll put in the public folder.
app.use(express.urlencoded({extended: true})) // Makes sure that our app is handling form information and properly parsing it.


//Step 5: Set Routes
//Step 5.1 - create a folder called routes at the root of the project folder (so not inside another folder)
//Step 5.2 - create a file called "home.js" (or something else) to handle the initial GET request for the homepage and the POST method for handling new items.
app.use('/edit', editRoutes) // If the route path starts with /edit, go to our edit routes.
app.use('/', homeRoutes) // If the route path starts with just a / go to our home routes. 


//Step 3: Start Server
app.listen(PORT, () => console.log(`server running on port ${PORT}`))