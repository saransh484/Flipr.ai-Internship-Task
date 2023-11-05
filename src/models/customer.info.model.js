const mongoose = require('mongoose')

const customer_details_schema = mongoose.Schema({
    customer_name:{
        type:String
    },
    email:{
        type:String
    },
    mobile_number:{
        type:Number
    },
    city:{
        type:String
    },
    customer_id:{
        type:String
    } 
})

module.exports = mongoose.model("customer_details", customer_details_schema)