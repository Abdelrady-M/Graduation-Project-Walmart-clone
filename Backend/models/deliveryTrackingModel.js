const mongoose=require('mongoose')

const deliveryTrackingSchema=mongoose.Schema({
    order_id:{
        type:Number,
        require:true
    },
    user_id:{
        type:Number,
        require:true
    },
    total_price:{
        type:String
    },
    products:[
        {product_id:Number,quantity:Number},
        {product_id:Number,quantity:Number}
],
    order_status:{
        type:String,
        optional:true
    },
    createdAt:{
        type:Date
    }
},
{
    timestamps: true, collection: 'Delivery Tracking'
})


const deliveryTrackingModel=mongoose.model('DeliveryTracking',deliveryTrackingSchema)

module.exports=deliveryTrackingModel


