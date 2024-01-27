const mongoose = require('mongoose')

const ProdRatingsSchema = mongoose.Schema({
  rating: {
    type: Number,
    required: true
  }, 
  user_id:{
    type:String,
    minLength:8,
    unique:true
  },
  product_id:{
    type:String,
    minLength:8,
    unique:true
  },
  rating_id:{
    type:String,
    minLength:8,
    unique:true
  },
  updatedAt: {
    type: Date
  }
},
    {
        timestamps: true, collection: 'Products Ratings'
    })


const ProdRatingsModel = mongoose.model('Product_Ratings', ProdRatingsSchema)

module.exports = ProdRatingsModel
