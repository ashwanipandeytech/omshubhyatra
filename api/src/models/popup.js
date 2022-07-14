const mongoose = require("mongoose");
const popupSchema = new mongoose.Schema({
    PopupId:{
        type: Number
    },
    Title: {
        type: String
    },
    Image: {
        type: String
    },
    IsActive: {
        type: Boolean
    }
});
const Popup = new mongoose.model("popups", popupSchema);
module.exports = Popup;