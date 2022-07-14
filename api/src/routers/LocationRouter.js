const express = require("express");
const router = new express.Router();
const auth = require("../authentication/auth");
var location_controller = require('../controllers/LocationController');

router.get("/api/countries", auth, location_controller.Get_Country);
router.get("/api/countries/:id", auth, location_controller.Get_CountryById);
router.post("/api/countries", auth, location_controller.Post_Country);
router.patch("/api/countries/:id", auth, location_controller.Patch_Country);
router.delete("/api/countries/:id", auth, location_controller.Delete_Country);

router.get("/api/states", location_controller.Get_State);
router.get("/api/states/:id", location_controller.Get_StateById);
router.post("/api/states", auth, location_controller.Post_State);
router.patch("/api/states/:id", auth, location_controller.Patch_State);
router.delete("/api/states/:id", auth, location_controller.Delete_State);

router.get("/api/Destinations", location_controller.Get_Destination);
router.get("/api/Destinations/:id", location_controller.Get_DestinationById);
router.post("/api/Destinations", auth, location_controller.Post_Destination);
router.patch("/api/Destinations/:id", auth, location_controller.Patch_Destination);
router.delete("/api/Destinations/:id", auth, location_controller.Delete_Destination);

module.exports = router;