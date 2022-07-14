const express = require("express");
const router = new express.Router();
const auth = require("../authentication/auth");
var permission_controller = require('../controllers/PermissionConroller');

router.get("/api/roles", auth, permission_controller.Get_Role);
router.get("/api/roles/:id", auth, permission_controller.Get_RoleById);
router.post("/api/roles", auth, permission_controller.Post_Role);
router.patch("/api/roles/:id", auth, permission_controller.Patch_Role);
router.delete("/api/roles/:id", auth, permission_controller.Delete_Role);

router.get("/api/rights", auth, permission_controller.Get_Right);
router.get("/api/rights/:id", auth, permission_controller.Get_RightById);
router.post("/api/rights", auth, permission_controller.Post_Right);
router.patch("/api/rights/:id", auth, permission_controller.Patch_Right);
router.delete("/api/rights/:id", auth, permission_controller.Delete_Right);

router.get("/api/permissions", auth, permission_controller.Get_Permission);
router.get("/api/permissions/:id", auth, permission_controller.Get_PermissionById);
router.post("/api/permissions", auth, permission_controller.Post_Permission);
router.patch("/api/permissions/:id", auth, permission_controller.Patch_Permission);
router.delete("/api/permissions/:id", auth, permission_controller.Delete_Permission);

module.exports = router;