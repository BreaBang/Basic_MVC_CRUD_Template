const mongoose = require('mongoose'); // Requires mongoose. Adds structore to our data by using a Schema, turning it into a model and then exporting the model.
const itemListSchema = new mongoose.Schema({
    textinput:{
        type: String,
        require:true, // Ensures the file won't be written to the database if this field is blank. Helpful when building larger apps that read data and aren't expecting blank fields. 
    },
    numberinput:{
        type: Number,
        require: true, // Ensures the file won't be written to the database if this field is blank. Helpful when building larger apps that read data and aren't expecting blank fields. 
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ItemList', itemListSchema, 'items', ) // items is a collection. ItemList is how we will reference the itemListSchema in the controller. 
