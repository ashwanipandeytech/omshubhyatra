const mongoose = require("mongoose");
const countrySchema = new mongoose.Schema({
    CountryId: {
        type: Number,
        required: true
    },
    CountryName: {
        type: String,
        required: true,
        minlength: 3
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
const Country = new mongoose.model("Country", countrySchema);
module.exports = Country;