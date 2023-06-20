const mongoose = require('mongoose')
const isEmail = require("validator/lib/isEmail")


const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "Invalid email address"
            }
        }
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength:6,
        maxlength:200
    },
    role:{
        type:String,
        default:"admin"
    }
},{timestamps:true})

const User = mongoose.model('User', userSchema)

module.exports = User