const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema({
    RoleId: {
        type: Number,
        required: true
    },
    RoleName: {
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
const Role = new mongoose.model("Role", roleSchema);
module.exports = Role;