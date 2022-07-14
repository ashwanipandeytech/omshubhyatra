const express = require("express");
const router = new express.Router();
const auth = require("../authentication/auth");
var seo_controller = require('../controllers/SeoController');

router.get("/api/seos/", seo_controller.Get_Seo);
router.get("/api/seo_by_slug/:slug", seo_controller.Get_SeoBySlug);
router.post("/api/seos", auth, seo_controller.Post_AddSeo);
router.get("/api/seos/:id", auth, seo_controller.Get_SeoById);
router.patch("/api/seos_edit/:id", auth, seo_controller.Patch_Seo);

module.exports = router;