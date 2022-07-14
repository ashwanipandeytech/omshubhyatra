const express = require("express");
const router = new express.Router();
const auth = require("../authentication/auth");
var user_controller = require('../controllers/UserController');

router.get("/api/users", auth, user_controller.Get_User);
router.get("/api/users/:id", auth, user_controller.Get_UserById);
router.post("/api/users", auth, user_controller.Post_User);
router.patch("/api/users/:id", auth, user_controller.Patch_User);
router.get("/api/change_password/:OldPWD/:PWD/:id", auth, user_controller.change_UserPWD);
router.delete("/api/users/:id", auth, user_controller.Delete_User);
router.post("/api/login", user_controller.User_Login);
router.post("/api/logout", auth, user_controller.User_Logout);

router.get("/api/enquiry", auth, user_controller.Get_Enquiry);
router.get("/api/enquiry/:id", auth, user_controller.Get_EnquiryById);
router.get("/api/enquiry_by_user/:role/:userid", auth, user_controller.Get_EnquiryByUser);
router.post("/api/enquiry", user_controller.Post_Enquiry);
router.patch("/api/assign_enquiry/:user/:id", user_controller.Patch_Multi_Assign_Enquiry);
router.patch("/api/enquiry/:id", auth, user_controller.Patch_Enquiry);
router.patch("/api/mark_enquiry/:id", auth, user_controller.Patch_Mark_Enquiry);
router.patch("/api/followup_enquiry/:id", auth, user_controller.Patch_Followup_Enquiry);
router.patch("/api/aditional_notes/:id", auth, user_controller.Patch_Aditional_Notes);
router.delete("/api/enquiry/:id", auth, user_controller.Delete_Enquiry);
router.delete("/api/delete_enquiry/:id", user_controller.Delete_Multi_Enquiry);

router.get("/api/feedback", auth, user_controller.Get_Feedback);
router.get("/api/feedback/:id", auth, user_controller.Get_FeedbackById);
router.post("/api/feedback", user_controller.Post_Feedback);
router.patch("/api/feedback/:id", auth, user_controller.Patch_Feedback);
router.delete("/api/feedback/:id", auth, user_controller.Delete_Feedback);

router.get("/api/testimonial", user_controller.Get_Testimonial);
router.get("/api/testimonial/:id", user_controller.Get_TestimonialById);
router.post("/api/testimonial", auth, user_controller.Post_Testimonial);
router.patch("/api/testimonial/:id", auth, user_controller.Patch_Testimonial);
router.delete("/api/testimonial/:id", auth, user_controller.Delete_Testimonial);

module.exports = router;