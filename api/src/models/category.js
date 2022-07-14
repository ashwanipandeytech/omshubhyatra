const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    CategoryId: {
        type: Number,
        required: true
    },
    CategoryName: {
        type: String,
        required: true,
        minlength: 3
    },
    Description: {
        type: String
    },
    Image: {
        type: String
    },
    CategorySlug: {
        type: String,
        required: true
    },
    Keys:[{
        Key:{
            type: String
        }
    }],
    StartingPrice:{
        type: Number
    },
    IsActive: {
        type: Boolean,
        require: true
    },
    CreatedBy: {
        type: String,
        require: true
    },
    CreatedOn: {
        type: Date,
        require: true
    }
});
const Category = new mongoose.model("categories", categorySchema);
module.exports = Category;