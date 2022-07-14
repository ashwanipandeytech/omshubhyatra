const mongoose = require("mongoose");
const validator = require("validator");
const enquirySchema = new mongoose.Schema({
    PersonName: {
        type: String,
        required: true,
        minlength: 3
    },
    EmailId: {
        type: String,

        validate(value) {
            if (value != '' && value != undefined && value != null) {
                if (!validator.isEmail(value)) {
                    console.info(value == '', value == undefined, value == null)
                    throw new console.error("Invalid Email");
                }
            } else {
                return true
            }

        }
    },
    MobileNo: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    Departure: {
        type: String,
        //  required: false,
    },
    Destination: {
        type: String,
        required: true,
    },
    Noper: {
        type: String,
        // required: false,
    },
    Message: {
        type: String
    },
    Source: {
        type: String,
    },
    FollowUpDate: {
        type: String,
    },
    Mark: {
        type: String,
    },
    MarkReason: {
        type: String,
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
    CreatedOn: {
        type: Date,
        require: true
    },
    Notes: {
        type: String,
        require: true
    }
});
const Enquiry = new mongoose.model("Enquiries", enquirySchema);
module.exports = Enquiry;