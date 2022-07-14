const mongoose = require("mongoose");
const validator = require("validator");
const feedbackSchema = new mongoose.Schema({
    PersonName: {
        type: String,
        required: true,
        minlength: 3
    },
    NoofPersons: {
        type: String,
        required: true
    },
    EmailId: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new console.error("Invalid Email");
            }
        }
    },
    MobileNo: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    PackageId: {
        type: Number
    },
    PackageName: {
        type: String
    },
    JourneyDate: {
        type: Date
    },
    Message: {
        type: String
    },
    AssignedUser: {
        type: String,
        minlength: 6,
        maxlength: 10
    },
    AssignedDate: {
        type: Date
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
const Feedback = new mongoose.model("Feedbacks", feedbackSchema);
module.exports = Feedback;