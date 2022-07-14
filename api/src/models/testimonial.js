const mongoose = require("mongoose");
const testimonialSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Address: {
        type: String
    },
    Image: {
        type: String
    },
    Testimonial: {
        type: String
    }
});
const Testimonial = new mongoose.model("testimonial", testimonialSchema);
module.exports = Testimonial;