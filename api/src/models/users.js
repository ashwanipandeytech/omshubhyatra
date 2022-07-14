const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const logger = require("../models/logger");
const userSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 10
    },
    RoleId: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true,
        minlength: 3
    },
    Gender: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    EmailId: {
        type: String,
        required: true,
        unique: [true, "Email id already exist !!!"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new console.error("Invalid Email");
            }
        }
    },
    MobileNo: {
        type: Number,
        required: true,
        unique: [true, "Mobile No id already exist !!!"],
        minlength: 8,
        maxlength: 10
    },
    Address: {
        type: String
    },
    Password: {
        type: String,
        require: true
    },
    ConfirmPassword: {
        type: String,
        require: true
    },
    Tokens: [{
        token:{
            type: String,
            require: true
        }
    }],
    token:{
        type: String,
        require: true
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
})
userSchema.methods.generateAuthToken = async function(req, res){
    try{
        const token = jwt.sign({_id:this._id}, "RASBIHARISHARMA16061987DAHRAULIMATHURAUP85");
        this.Tokens = this.Tokens.concat({token:token});
        this.token = token;
        await this.save();
        return token;
    } catch (e){
        logger.WriteLog("users_model", "Error : " + e, "generateAuthToken");
        res.status(400).send(e); 
    }
}
userSchema.pre("save", async function (next) {
    try{
        if (this.isModified("Password")) {
            this.ConfirmPassword = await bcrypt.hash(this.Password, 10);
            this.Password = await bcrypt.hash(this.Password, 10);
        }
    } catch (e){
        logger.WriteLog("users_model", "Error : " + e, "generateAuthToken");
        res.status(400).send(e); 
    }
    next();
})
const User = new mongoose.model("User", userSchema);
module.exports = User;