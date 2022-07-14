const mongoose = require("mongoose");
const ImagesSchema = new mongoose.Schema({
    ImageUrl: {
        type: String,
        required: true,
        minlength: 3
    },
    ImageName: {
        type: String,
        required: true,
        minlength: 3
    },
    ImageType: {
        type: String
    }
});
const Images = new mongoose.model("Images", ImagesSchema);
module.exports = Images;