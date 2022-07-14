const mongoose = require("mongoose");
const offerSchema = new mongoose.Schema({
    OfferNumber: {
        type: String
    },
    OfferTitle: {
        type: String
    },
    TitleSlug: {
        type: String
    },
    Image: {
        type: String
    },
    Link: {
        type: String
    }
});
const Offer = new mongoose.model("offers", offerSchema);
module.exports = Offer;