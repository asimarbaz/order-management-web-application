const mongoose = require('mongoose')
const isNumeric = require("validator/lib/isNumeric")

const Schema = mongoose.Schema

const customerDataSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true,
        minLength:10,
        maxLength:10,
        validate:{
            validator:function(value){
                return isNumeric(value)
            },
            message:function(){
                return "Invalid mobile number"
            }
        }
    },
    Date:{
        type:Date,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    }
}, {timestamps:true})

const CustomerData = mongoose.model('CustomerData', customerDataSchema)

module.exports = CustomerData