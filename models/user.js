
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        uniqe: true,

    },
    password:{
        type:String,
        required:[true,'Email is required']
    }, 
    role:{
        type:String,
        required:[true,'needed role']
    },
    introduction:{
        type:String
    },
    tokens: [{
        type:String
    }]
   
})

const User = mongoose.model("User", userSchema)
module.exports = User;