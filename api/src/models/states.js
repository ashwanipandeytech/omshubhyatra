const mongoose = require("mongoose");
const stateSchema = new mongoose.Schema({
    StateId: {
        type: Number,
        required: true
    },
    StateName: {
        type: String,
        required: true,
        minlength: 3
    },
    CountryCode: {
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
const State = new mongoose.model("State", stateSchema);
module.exports = State;