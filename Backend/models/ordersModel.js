const mongoose=require('mongoose')

const ordersSchema=mongoose.Schema({
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
// {
//     timestamps: true, collection: 'Orders'
// }
)


const ordersModel=mongoose.model('Orders',ordersSchema)

module.exports=ordersModel


