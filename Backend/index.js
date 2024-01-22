const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config()
//using express
const app = express();
//Routs

// const carts = require('./routes/cartsRouts')

//express middleware
app.use(express.json());
app.use(cors());
//routs for All Project routes

// app.use('/Carts', carts)

//mongoose database
mongoose.connect(process.env.MONGOOSEURL)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error("Error connecting to DB:", err);
    });

// if path is not specified
app.use("*", (req, res, next) => {
    res.status(404).json({ message: "Not Found" })
})
//error handling
app.use((err, res, req, next) => {
    res.status(500).json({ message: err.message })
})
//listening
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
}) 
