const Review = require("../models/review")

exports.getReviewList = async(req,res) =>{
    try{
        const reviewList = await Review.find({})
        res.status(200).json({
            reviewList
        })
    }catch(err){
        res.status(400).json({
            mess: "error message"
        })
    }
}

exports.createReview = async(req,res) =>{
    try{

    }catch(err){
        res.status(400).json({
            mess: "error message"
        })
    }
}