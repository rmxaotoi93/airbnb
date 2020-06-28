const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    author:{
        type:String,
        required: [true,'require name author'],
        trim:true,
    },
    content:{
        type:String,
        required: [true,'require name content'],
        trim:true,
    }
})

const Review = mongoose.model("Review", reviewSchema)
module.exports = Review