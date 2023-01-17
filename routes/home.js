const express = require("express") // Bringing express into use in this file.
const router = express.Router() // Using a built in express method called Router.
const homeController = require('../controllers/home') // Brining in our controller for use.

//Handles the initial GET reqeust for the homepage
router.get('/', homeController.getIndex) //This is a read only route for the index page. GET requests are "read" only routes.
//Handles the POST method request for adding a new item
router.post('/new', homeController.createItem)//This is a create route. It's the "create" in CRUD. 

module.exports = router