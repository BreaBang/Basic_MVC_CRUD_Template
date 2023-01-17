const mongoose = require('mongoose'); // Must add everytime we want to use mongoose. 

const connectDB = async () => { // Waiting on a successful response before we move on. Asynch says wait, hang on before we do something else. 
    try { // try to do something (connect to the DB in this case )
        const conn = await mongoose.connect( // wait to do anything else until we connect 
           process.env.DB_CONNECTION // Pass the database connection string. Tells the app to look in the env file for the data base connection. Have to use Process.env.VariableName for environment variables. 
           )
           console.log(`MongoDB connected: ${conn.connection.host}`) // Console logs that the database is connected so that we know it's working. 
    } catch (err){ // Do this if that doesn't work.
        console.log(err)
        process.exit(1) // Exit the function if there is an error. 
    }
}
module.exports = connectDB // Exports the function so we can use it in server.js