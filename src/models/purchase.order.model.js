const mongoose = require('mongoose')

const purchase_order_schema = mongoose.Schema({
    product_name:{
        type:String
    },
    quantity:{
        type:Number
    },
    pricing:{
        type:Number
    },
    mrp:{
        type:Number
    },
    purchase_order_id:{
        type:String
    },
    customer_id:{
        type:String
    } 
})

module.exports = mongoose.model("purchase_order", purchase_order_schema)