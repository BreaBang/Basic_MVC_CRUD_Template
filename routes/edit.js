const express = require("express") // Bringing express into use in this file.
const router = express.Router() // Using a built in express method called Router.
const editController = require('../controllers/edit') // Brining in our controller for use.

router.get('/:id', editController.getEdit); //GET reqeust for the edit page with the item id that we want to edit
router.post('/update/:id', editController.updateItem); //Forms are limited to GET and POST requests and we are not overriding in this app.
router.get('/remove/:id', editController.deleteItem); //Deletes the item



module.exports = router