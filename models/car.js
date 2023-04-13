const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    color: String,
    make: String,
    model: String,
    style: String,
    price: Number
})
module.exports = mongoose.model("Car",carSchema)