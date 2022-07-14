const mongoose = require("mongoose");
const permission = new mongoose.Schema({
    RoleId: {
        type: Number,
        required: true
    },
    Rights: [{
        RightId:{
            type: Number,
            required: true
        }
    }]
});
const Permission = new mongoose.model("Permission", permission);
module.exports = Permission;