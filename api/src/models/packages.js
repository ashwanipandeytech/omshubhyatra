const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const packageSchema = new mongoose.Schema({
    PackageId: {
        type: Number,
        required: true
    },
    Type: {
        type: Number,
        required: true
    },
    Code: {
        type: String
    },
    CategoryId: {
        type: Number,
        required: true
    },
    Title: {
        type: String,
        required: true,
        minlength: 3
    },
    PackageSlug: {
        type: String,
        required: true
    },
    StartDate: {
        type: Date,
        require: true
    },
    Extensions: {
        type: String
    },
    Executed: {
        type: String
    },
    NoOfDays: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Images: [{
        Image:{
            type: String
        }
    }],
    Image:{
        type: String
    },
    Keys:{type: String},
    Map: {
        type: String
    },
    Inclusions: {
        type: String
    },
    Exclusions: {
        type: String
    },
    Price: {
        type: Number
    },
    Priority: {
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
const Package = new mongoose.model("Package", packageSchema);
module.exports = Package;