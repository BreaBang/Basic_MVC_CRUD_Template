const ItemList = require('../models/itemlist') // referencing the model and brining it into use. 

module.exports = {
    getIndex: async (req, res) => {
        try {
            const items = await ItemList.find() // Taking the entire list of items
            res.render("index.ejs", {ItemList: items}) // Sending it to index.ejs to render.
        } catch (err){
            if(err) return res.status(500).send(err)
        }
    },
    createItem: async (req, res) => {
            const newItem = new ItemList(
                {
                textinput: req.body.textinput, // Grabbing the info from this form data
                numberinput: req.body.numberinput, // Grabbing the info from this form data
                }
                
            ) // Taking the entire list of items
        try{
            await newItem.save() // Telling the program to save the new items. 
            console.log(newItem)
            res.redirect("/") // Reload the homepage so we can see the new items. 
        } catch (err){
            if(err) return res.status(500).send(err)
            res.redirect("/")
        }
    }
}
