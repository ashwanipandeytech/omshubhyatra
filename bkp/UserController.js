const User = require("../models/users");
const Enquiry = require("../models/enquiries");
const Feedback = require("../models/feedbacks");
const Testimonial = require("../models/testimonial");
const logger = require("../models/logger");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const util = require('util');

exports.Get_User = async(req, res) => {
    try {
        const UserData = await User.find();
        res.status(200).send(UserData);
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Get_Users");
        res.status(400).send(e);
    }
};
exports.Get_UserById = async(req, res) => {
    try {
        const _id = req.params.id;
        const UserData = await User.findById(_id);
        res.status(200).send(UserData);
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Get_Users");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.Post_User = async(req, res) => {
    try {
        const user = new User(req.body);
        user.CreatedOn = new Date();
        user.IsActive = true;
        if (user.Password == user.ConfirmPassword) {
            const token = await user.generateAuthToken();
            const createUser = await user.save();
            res.status(200).send(JSON.stringify({ "success": true }));
        } else {
            res.status(403).send(JSON.stringify({ "success": false, "error": "Password doesn't match with confirm password" }));
        }
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Post_Users");
        logger.WriteLog("user_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};
exports.Patch_User = async(req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id);
        if (req.body.Password !== user.Password) {
            req.body.ConfirmPassword = await bcrypt.hash(req.body.ConfirmPassword, 10);
            req.body.Password = await bcrypt.hash(req.body.Password, 10);
        }
        const patchUser = await User.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(JSON.stringify({ "success": true }));
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "patch_Users");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.Delete_User = async(req, res) => {
    try {
        const _id = req.params.id;
        const DeleteUser = await User.findByIdAndDelete(_id);
        res.status(200).send(DeleteUser);
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Delete_Users");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.change_UserPWD = async(req, res) => {
    try {
        const _id = req.params.id;
        const _OldPWD = req.params.OldPWD;
        const _PWD = await bcrypt.hash(req.params.PWD, 10);
        const user = await User.findOne({ UserId: _id });
        const isMatch = await bcrypt.compare(_OldPWD, user.Password);
        if (isMatch) {
            user.Password = _PWD
            const patchUser = await User.findByIdAndUpdate(user._id, user, { new: true });
            res.status(200).send(JSON.stringify({ "success": true }));
        } else {
            res.status(200).send(JSON.stringify({ "success": false, "error": "Old Password does not match!" }));
        }
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Delete_Users");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.User_Login = async(req, res) => {
    try {
        const username = req.body.EmailId;
        const password = req.body.Password;
        const userEmail = await User.findOne({ EmailId: username });
        const isMatch = await bcrypt.compare(password, userEmail.Password);
        if (isMatch) {
            const token = await userEmail.generateAuthToken();
            const userlogin = await User.findOne({ EmailId: username }, { UserId: 1, RoleId: 1, Name: 1, EmailId: 1, MobileNo: 1, token: 1, _id: 0 });
            res.status(200).send(userlogin);
        } else {
            res.status(403).send("Invalid Password !!!");
        }
    } catch (e) {
        console.log("user_controller", "Error : " + e, "Post_Login");
        console.log("user_controller", "Request : " + util.inspect(req.body.Password, { depth: null }));
    }
};
exports.User_Logout = async(req, res) => {
    try {
        res.clearCookie("jwt");
        req.user.Tokens = req.user.Tokens.filter((cEle) => {
            return cEle.token !== req.token;
        });
        req.user.token = "";
        await req.user.save();
        res.status(200).send({ message: "Success" });
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Get_Logout");
        res.status(400).send(e);
    }
};
exports.Get_Enquiry = async(req, res) => {
    try {
        console.info('test enquiry')
        const EnquiryData = await Enquiry.find();
        res.status(200).send(EnquiryData);
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Get_Enquiry");
        res.status(400).send(e);
    }
};
exports.Get_EnquiryById = async(req, res) => {
    try {
        const _id = req.params.id;
        const EnquiryData = await Enquiry.findById(_id);
        res.status(200).send(EnquiryData);
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Get_Enquiry");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.Get_EnquiryByUser = async(req, res) => {
    try {
        const role = req.params.role;
        const userid = req.params.userid;
        var EnquiryData;
        if (role == 1 || role == 3) {
            EnquiryData = await Enquiry.find().sort({ "CreatedOn": -1 });
        } else {
            EnquiryData = await Enquiry.find({ AssignedUser: userid });
        }
        res.status(200).send(EnquiryData);
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Get_EnquiryByUser");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.Post_Enquiry = async(req, res) => {
    console.info('this is post')
    try {
        const enquiry = new Enquiry(req.body);
        enquiry.IsActive = true;
        enquiry.CreatedOn = new Date();
        const createEnquiry = await enquiry.save();

        let transporter = nodemailer.createTransport({
            host: "smtp.mail.eu-west-1.awsapps.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "info@omshubhyatra.in", // generated ethereal user
                pass: "Arush@06)&2020", // generated ethereal password
            },
        });
        if (enquiry.EmailId != undefined && enquiry.EmailId != null && enquiry.EmailId != '') {
            let info = await transporter.sendMail({
                from: '"Om Shubh Yatra" <info@omshubhyatra.in>', // sender address
                to: enquiry.EmailId, // list of receivers
                subject: "Enquiry Submitted In Om Shubh Yatra", // Subject line
                html: '<!doctype html> <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/> <title>Contact Form 7 Email Add on</title> </head> <body style="margin: 0; padding: 0"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <td style="background-image: url(https://piitr.com/wp-content/plugins/cf7-email-add-on/admin/assets/images/table-bg.jpg); background-repeat: repeat-x; background-color: #ffffff; padding-top: 20px;"> <table cellpadding="0" cellspacing="0" width="600" align="center"> <tr> <td align="center"> <div style="width: 100%; max-width: 650px; margin: 0 auto;"> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 650px; margin: 0 auto;"> <tbody> <tr> <td> <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 620px; margin: 0 auto; background: #ffffff;"> <tbody> <tr> <td style="background-color: #ffffff;"> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding-top: 20px; padding-bottom: 20px;"> <tbody> <tr> <td style="text-align: center;"> <a href="https://www.piitr.com" target="_blank" style="display: inline-block;"><img src="https://omshubhyatra.in/assets/images/logo.png" alt=""></a> </td></tr></tbody> </table> </td></tr><tr> <td> <img src="https://piitr.com/wp-content/plugins/cf7-email-add-on/admin/assets/images/banner.jpg" alt="" style="width: 100%; display: block;"> </td></tr><tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9f9f9;"> <tbody> <tr> <td width="600" style="padding-top: 70px; padding-bottom: 40px; padding-left: 70px; padding-right: 70px;"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tbody> <tr> <td style="font-family: Verdana, sans-serif; font-weight: bold; font-size: 24px; line-height: 38px; color: #000000; text-align: center; padding-bottom: 15px;"> Thanks for getting in touch </td></tr><tr> <td style="font-family: Verdana, sans-serif; font-weight: normal; font-size: 16px; line-height: 28px; color: #000000; text-align: center; padding-bottom: 10px;"> We have received your inquiry. Happy to have you at our precious clients list. One of our sales representative will be in touch with you soon. till than stay tuned with the updates from <strong>Om Shubh Yatra</strong>... </td></tr><tr> <td style="height: 20px;"></td></tr><tr> <td height="40"></td></tr><tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tbody> <tr> <td style="text-align: center;"> <a href="https://m.facebook.com/omshubhyatraofficial/" target="_blank" style="display: inline-block; margin-right: 3px;"><img src="https://piitr.com/wp-content/plugins/cf7-email-add-on/admin/assets/images/facebook-icon.png"></a> <a href="https://twitter.com/omshubhyatra/status/567255988013527040" target="_blank" style="display: inline-block; margin-left: 3px; margin-right: 3px;"><img src="https://piitr.com/wp-content/plugins/cf7-email-add-on/admin/assets/images/twitter-icon.png"></a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </div></td></tr><tr> <td> <div style="width: 100%; max-width: 620px; margin: 0 auto;"> <table width="100%" cellpadding="0" cellspacing="0" border="0" style=""> <tr> <td style="font-family: Verdana, sans-serif; font-weight: normal; font-size: 14px; line-height: 24px; color: #3e3e3e; text-align: left; padding-bottom: 30px; padding-top: 15px;"> Copyright © 2021 <a href="https://www.piitr.com/" target="_blank" style="text-decoration: none; color: #1a1f8e">OM SHUBH YATRA</a> </td></tr></table> </div></td></tr></table> </td></tr></table> </body> </html>', // html body
            });

        }


        res.status(200).send(JSON.stringify({ "success": true }));
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Post_Enquiry");
        logger.WriteLog("user_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};

exports.Patch_Enquiry = async(req, res) => {
    try {
        const _id = req.params.id;
        const patchEnquiry = await Enquiry.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(JSON.stringify({ "success": true }));
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "patch_Enquiry");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};


exports.Patch_Multi_Assign_Enquiry = async(req, res) => {
    var user = req.params.user;
    var enquiryArr = req.params.id.split(',');
    enquiryArr.forEach(async function(item, index, array) {
        await Enquiry.findByIdAndUpdate(item, { "AssignedUser": user });
    });
    res.status(200).send(JSON.stringify({ "success": true }));
};

exports.Patch_Mark_Enquiry = async(req, res) => {
    try {
        const _id = req.params.id;
        const patchEnquiry = await Enquiry.findByIdAndUpdate(_id, req.body);
        res.status(200).send(JSON.stringify({ "success": true }));
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "patch_Enquiry");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Patch_Followup_Enquiry = async(req, res) => {
    try {
        const _id = req.params.id;
        const patchEnquiry = await Enquiry.findByIdAndUpdate(_id, req.body);
        res.status(200).send(JSON.stringify({ "success": true }));
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "patch_Enquiry");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};


exports.Patch_Aditional_Notes = async(req, res) => {
    try {
        const _id = req.params.id;
        const notes = await Enquiry.findByIdAndUpdate(_id, req.body);
        res.status(200).send(JSON.stringify({ "success": true }));
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.Delete_Enquiry = async(req, res) => {
    try {
        const _id = req.params.id;
        const DeleteEnquiry = await Enquiry.findByIdAndDelete(_id);
        res.status(200).send(DeleteEnquiry);
    } catch (e) {
        logger.WriteLog("user_controller", "Error : " + e, "Delete_Enquiry");
        logger.WriteLog("user_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Delete_Multi_Enquiry = async(req, res) => {
    var enquiryArr = req.params.id.split(',');
    enquiryArr.forEach(async function(item, index, array) {
        await Enquiry.findByIdAndDelete(item);
    });
    res.status(200).send(JSON.stringify({ "success": true }));
};


exports.Get_Feedback = async(req, res) => {
    try {
        const FeedbackData = await Feedback.find();
        res.status(200).send(FeedbackData);
    } catch (e) {
        logger.WriteLog("Feedback_controller", "Error : " + e, "Get_Feedbacks");
        res.status(400).send(e);
    }
};
exports.Get_FeedbackById = async(req, res) => {
    try {
        const _id = req.params.id;
        const FeedbackData = await Feedback.findById(_id);
        res.status(200).send(FeedbackData);
    } catch (e) {
        logger.WriteLog("Feedback_controller", "Error : " + e, "Get_Feedbacks");
        logger.WriteLog("Feedback_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.Post_Feedback = async(req, res) => {
    try {
        const feedback = new Feedback(req.body);
        const createFeedback = await feedback.save();
        res.status(200).send(createFeedback);
    } catch (e) {
        logger.WriteLog("feedback_controller", "Error : " + e, "Post_feedbacks");
        logger.WriteLog("feedback_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};
exports.Patch_Feedback = async(req, res) => {
    try {
        const _id = req.params.id;
        const patchFeedback = await Feedback.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(patchFeedback);
    } catch (e) {
        logger.WriteLog("feedback_controller", "Error : " + e, "patch_Feedbacks");
        logger.WriteLog("feedback_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Delete_Feedback = async(req, res) => {
    try {
        const _id = req.params.id;
        const DeleteFeedback = await Feedback.findByIdAndDelete(_id);
        res.status(200).send(DeleteFeedback);
    } catch (e) {
        logger.WriteLog("feedback_controller", "Error : " + e, "Delete_Feedbacks");
        logger.WriteLog("feedback_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};


exports.Get_Testimonial = async(req, res) => {
    try {
        const TestimonialData = await Testimonial.find();
        res.status(200).send(TestimonialData);
    } catch (e) {
        logger.WriteLog("Testimonial_controller", "Error : " + e, "Get_Testimonial");
        res.status(400).send(e);
    }
};
exports.Get_TestimonialById = async(req, res) => {
    try {
        const _id = req.params.id;
        const TestimonialData = await Testimonial.findById(_id);
        res.status(200).send(TestimonialData);
    } catch (e) {
        logger.WriteLog("Testimonial_controller", "Error : " + e, "Get_Testimonial");
        logger.WriteLog("Testimonial_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.Post_Testimonial = async(req, res) => {
    try {
        const testimonial = new Testimonial(req.body);
        const createTestimonial = await testimonial.save();
        res.status(200).send(JSON.stringify({ "success": true }));
    } catch (e) {
        logger.WriteLog("Testimonial_controller", "Error : " + e, "Post_Testimonial");
        logger.WriteLog("Testimonial_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};
exports.Patch_Testimonial = async(req, res) => {
    try {
        const _id = req.params.id;
        const patchTestimonial = await Testimonial.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(patchTestimonial);
    } catch (e) {
        logger.WriteLog("Testimonial_controller", "Error : " + e, "patch_Testimonial");
        logger.WriteLog("Testimonial_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Delete_Testimonial = async(req, res) => {
    try {
        const _id = req.params.id;
        const DeleteTestimonial = await Testimonial.findByIdAndDelete(_id);
        res.status(200).send(DeleteTestimonial);
    } catch (e) {
        logger.WriteLog("Testimonial_controller", "Error : " + e, "Delete_Testimonial");
        logger.WriteLog("Testimonial_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};