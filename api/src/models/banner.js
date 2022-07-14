const mongoose = require("mongoose");
const bannerSchema = new mongoose.Schema({
    BannerTitle: {
        type: String
    },
    TitleSlug: {
        type: String
    },
    Image: {
        type: String
    }
});
const Banner = new mongoose.model("banners", bannerSchema);
module.exports = Banner;