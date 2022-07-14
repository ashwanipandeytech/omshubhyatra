const mongoose = require("mongoose");
const destinationSchema = new mongoose.Schema({
    DestinationId: {
        type: Number,
        required: true
    },
    DestinationName: {
        type: String,
        required: true,
        minlength: 3
    },
    Keys:[{
        Key:{
            type: String
        }
    }],
    Hotel: {
        type: String
    },
    Sightseeing:[{
        Name:{
            type: String
        }
    }],
    StateId: {
        type: Number,
        required: true
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
const Destination = new mongoose.model("Destination", destinationSchema);
module.exports = Destination;