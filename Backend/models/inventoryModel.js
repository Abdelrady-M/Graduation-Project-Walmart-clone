const mongoose=require('mongoose')

const inventorySchema=mongoose.Schema({
    product_id:{
        type:String
    },
    quantity_available:{
        type:Number
    },
    last_restock_date:{
        type:Date,
    },
    restock_interval:{
        type:Number
    }
},
{
    timestamps: true, collection: 'Inventory'
})


const inventoryModel=mongoose.model('Inventory',inventorySchema)

module.exports=inventoryModel


