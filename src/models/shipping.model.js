const mongoose = require('mongoose')

const shipping_schema = mongoose.Schema({
    address:{
        type:String
    },
    city:{
        type:String
    },
    pincode:{
        type:Number
    },
    purchase_order_id:{
        type:String
    },
    customer_id:{
        type:String
    } 
})

module.exports = mongoose.model("shipping_details", shipping_schema)