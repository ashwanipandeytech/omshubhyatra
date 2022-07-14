const mongoose = require("mongoose");
const rightSchema = new mongoose.Schema({
    RightId: {
        type: Number,
        required: true
    },
    RightName: {
        type: String,
        required: true,
        minlength: 3
    },
    ParentId: {
        type: Number,
        required: true
    },
    Url: {
        type: String,
        required: true,
        minlength: 3
    },
    Icon: {
        type: String,
        required: true,
        minlength: 3
    },
    Priority: {
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
const Right = new mongoose.model("Right", rightSchema);
module.exports = Right;