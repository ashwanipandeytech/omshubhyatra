const mongoose = require("mongoose");
const logger = require("../models/logger");
//const conStr = process.env.DB_TYPE + "://" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME;
const conStr = "mongodb://localhost:27017/shubh_yatra";
mongoose.connect(conStr, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});
