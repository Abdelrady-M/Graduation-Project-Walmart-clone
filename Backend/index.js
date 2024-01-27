const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config()

//using express
const app = express();
//Routs

// const carts = require('./routes/cartsRouts')
const productsRouts = require('./routes/productsRouts')
const usersRouts = require('./routes/usersRouts')
const reviewRouts = require('./routes/reviewsRouts')
const PaymentRouts = require('./routes/paymentsRouts')
const wishlistRouts = require('./routes/wishlistRouts')
//express middleware
app.use(express.json());
app.use(cors());
//routs for All Project routes

// app.use('/Carts', carts)
app.use('/users', usersRouts)
app.use('/products', productsRouts)
app.use('/reviews', reviewRouts)
app.use('/payment', PaymentRouts)
app.use('/wishlist', wishlistRouts)
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
    res.status(404).json({ message: "Not Found path" })
})
// error handling
app.use((err, res, req, next) => {
    res.status(500).json({ message: "routs not found" })
})
//listening
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
}) 
