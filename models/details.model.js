const mongoose = require("mongoose")

const userdetails = new mongoose.Schema({
    Name:String,
    DateOfBirth:String,
    mobilenumber:Number,
    Email:String,
})

module.exports = mongoose.model("userdetails", userdetails)