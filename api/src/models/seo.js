const mongoose = require("mongoose");
const SeoSchema = new mongoose.Schema({
    Slug: {
        type: String,
        required: true,
    },Title: {
        type: String,
        required: true,
    },
    Keywords: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    }
});
const Seo = new mongoose.model("Seo", SeoSchema);
module.exports = Seo;