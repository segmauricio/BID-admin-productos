const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The name of the product is required"],
		minlength: [3, "The title must be 3 characters long at least"],
        maxlength: [100, "The title cant be longer than 10 characters"]
    },
    price: {
        type: Number,
        required: [true, "The price is required"], 
		min: [1, "The price can't be lower than 1"],
    },
    description:{
        type: String,
        required: [true, "The description is required"],
        minlength: [3, "The description must be 3 characters long at least"],
        maxlength: [250, "The description cant be longer than 250 characters"]
    }},
    { timestamps: true }
);

module.exports.Product = mongoose.model("Products", ProductSchema);