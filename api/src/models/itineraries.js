const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const itinerarySchema = new mongoose.Schema({
    PackageId: {
        type: String,
        required: true
    },
    Day: {
        type: String,
        required: true
    },
    Cities: {
        type: String
    },
    Distance: {
        type: String
    },
    Description: {
        type: String,
        required: true
    },
    Image: {
        type: String
    },
    Hotel: {
        type: String
    },
    Sightseeing:[{
        Name:{
            type: String
        }
    }],
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
const Itinerary = new mongoose.model("Itinerary", itinerarySchema);
module.exports = Itinerary;