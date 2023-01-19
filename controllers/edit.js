const ItemList = require('../models/itemlist') // referencing the model and brining it into use. 

module.exports = {
   getEdit: async (req, res) =>  {
        const id = req.params.id // If you want to pull something out of the path - use params. If you want content - use body.
        console.log(id)
        try {
            const items = await ItemList.find()
            res.render("edit.ejs", {itemList: items, idItem: id})
        } catch (err){
            if(err) return res.status(500).send(err)
            res.redirect('/');
        }
    },
   updateItem: async (req, res) =>  {
    const id = req.params.id
        try {
           await ItemList.findByIdAndUpdate(
            id,
            {
            textinput: req.body.textinput,
            numberinput: req.body.numberinput,
           },
        )
        res.redirect('/')
    } catch(err){
        if(err) return res.status(500).send(err)
        res.redirect('/');
    }

   },
   deleteItem: async (req, res) =>  {
    const id = req.params.id
        try {
            const result = await ItemList.findByIdAndDelete(id)
             console.log(result)
            res.redirect('back')
    } catch(err){
        if(err) return res.status(500).send(err)
        res.redirect('/');
    }
   }
    
}
