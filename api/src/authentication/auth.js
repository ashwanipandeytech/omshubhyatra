const jwt = require("jsonwebtoken");
const logger = require("../models/logger");
const User = require("../models/users");

const auth = async (req, res, next) => {    
    try{
        const token = req.headers.token;
        const IsVerify = jwt.verify(token, "RASBIHARISHARMA16061987DAHRAULIMATHURAUP85");
        const user = await User.findOne({_id:IsVerify._id});
        req.token = token;
        req.user = user;
        if(user){
            next();
        } else{
            res.status(403).send("Unauthorized User"); 
        }
    } catch (e){
        logger.WriteLog("Auth", "Error : " + e, "auth");
        res.status(401).send(e); 
    }
}
module.exports = auth;