const express = require("express");
const router = new express.Router();
const auth = require("../authentication/auth");
var package_controller = require('../controllers/PackageController');
var upload_controller = require('../controllers/UploadController');

router.get("/api/packages", package_controller.Get_Package);
router.get("/api/packages/:id", package_controller.Get_PackageById);
router.get("/api/category_packages_fd/:id", package_controller.Get_PackagesByCategoryIdFD);
router.get("/api/package_by_packageid/:id", auth, package_controller.Get_PackageByPackageId);
router.get("/api/packages/:dest/:type/:day/:price", package_controller.Search_Package);
router.get("/api/category_packages/:id", package_controller.Get_PackagesByCategoryId);
router.get("/api/execution_cities/:id", package_controller.Get_ExecutionByCategoryId);
router.get("/api/packagebyslug/:id", package_controller.Get_PackagesBySlug);
router.get("/api/packagebykey/:id", package_controller.Get_PackagesByKey);
router.get("/api/destination_packages/:id", package_controller.Get_PackagesByDestination);
router.post("/api/packages", auth, package_controller.Post_Package);
router.patch("/api/packages/:id", auth, package_controller.Patch_Package);
router.delete("/api/packages/:id", auth, package_controller.Delete_Package);

router.get("/api/itineraries", package_controller.Get_Itinerary);
router.get("/api/itineraries/:id", package_controller.Get_ItineraryById);
router.get("/api/package_itineraries/:PackageId", package_controller.Get_PackageItinerary);
router.post("/api/itineraries", auth, package_controller.Post_Itinerary);
router.patch("/api/itineraries/:id", auth, package_controller.Patch_Itinerary);
router.delete("/api/itineraries/:id", auth, package_controller.Delete_Itinerary);

router.get("/api/categories", package_controller.Get_Category);
router.get("/api/categories_web", package_controller.Get_Category_Web);
router.get("/api/categories/:id", package_controller.Get_CategoryById);
router.get("/api/categories_type/:id", package_controller.Get_CategoryByType);
router.post("/api/categories", auth, package_controller.Post_Category);
router.patch("/api/categories/:id", auth, package_controller.Patch_Category);
router.delete("/api/categories/:id", auth, package_controller.Delete_Category);
router.patch("/api/deactivatecategories/:id", auth, package_controller.DeActivate_Category);
router.patch("/api/activatecategories/:id", auth, package_controller.Activate_Category);

router.get("/api/banners", package_controller.Get_Banner);
router.get("/api/banners/:id", package_controller.Get_BannerById);
router.post("/api/banners", auth, package_controller.Post_Banner);
router.patch("/api/banners/:id", auth, package_controller.Patch_Banner);
router.delete("/api/banners/:id", auth, package_controller.Delete_Banner);


router.get("/api/offers", package_controller.Get_Offer);
router.get("/api/offers/:id", package_controller.Get_OfferById);
router.post("/api/offers", auth, package_controller.Post_Offer);
router.delete("/api/offers/:id", auth, package_controller.Delete_Offer);
router.get("/api/offerByNumber/:id", package_controller.Get_OfferByNumber);

router.get("/api/popups", package_controller.Get_Popup);
router.get("/api/popups/:id", package_controller.Get_PopupById);
router.patch("/api/popups/:id", auth, package_controller.Patch_Popup);
router.delete("/api/popups/:id", auth, package_controller.Delete_Popup);
router.patch("/api/deactivatepopup/:id", auth, package_controller.DeActivate_Popup);
router.patch("/api/activatepopup/:id", auth, package_controller.Activate_Popup);

router.post("/api/upload_image", auth, upload_controller.UploadImage);

module.exports = router;