const Role = require("../models/roles");
const Right = require("../models/rights");
const Permission = require("../models/permissions");
const logger = require("../models/logger");

/* Role Methods Start */
exports.Get_Role = async (req, res) => {
    try {
        const RoleData = await Role.find();
        res.status(200).send(RoleData);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Get_Roles");
        res.status(400).send(e); 
    }
};
exports.Get_RoleById = async (req, res) => {
    try {
        const _id = req.params.id;
        const RoleData = await Role.findById(_id);
        res.status(200).send(RoleData);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Get_Roles");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Post_Role = async (req, res) => {
    try {
        const role = new Role(req.body);
        const MaxDoc = await Role.findOne().sort({RoleId:-1});
        var MaxRole=1;
        if(MaxDoc){ MaxRole = MaxDoc.RoleId + 1; }
        role.RoleId = MaxRole;
        const createRole = await role.save();
        res.status(200).send(createRole);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Post_Roles");
        logger.WriteLog("permission_controller", "Request : " + req.body);
        res.status(400).send(e); 
    }
};
exports.Patch_Role = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchRole = await Role.findByIdAndUpdate(_id, req.body, {new:true});
        res.status(200).send(patchRole);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "patch_Roles");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Delete_Role = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteRole = await Role.findByIdAndDelete(_id);
        res.status(200).send(DeleteRole);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Delete_Roles");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
/* Role Methods End */
/* Right Methods Start */
exports.Get_Right = async (req, res) => {
    try {
        const RightData = await Right.find();
        res.status(200).send(RightData);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Get_Rights");
        res.status(400).send(e); 
    }
};
exports.Get_RightById = async (req, res) => {
    try {
        const _id = req.params.id;
        const RightData = await Right.findById(_id);
        res.status(200).send(RightData);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Get_Rights");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Post_Right = async (req, res) => {
    try {
        const right = new Right(req.body);
        const MaxDoc = await Right.findOne().sort({RightId:-1});
        var MaxRight=1;
        if(MaxDoc){ MaxRight = MaxDoc.RightId + 1; }
        right.RightId = MaxRight;
        const createRight = await right.save();
        res.status(200).send(createRight);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Post_Rights");
        logger.WriteLog("permission_controller", "Request : " + req.body);
        res.status(400).send(e); 
    }
};
exports.Patch_Right = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchRight = await Right.findByIdAndUpdate(_id, req.body, {new:true});
        res.status(200).send(patchRight);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "patch_Rights");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Delete_Right = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteRight = await Right.findByIdAndDelete(_id);
        res.status(200).send(DeleteRight);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Delete_Rights");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
/* Right Methods End */
/* Permission Methods Start */
exports.Get_Permission = async (req, res) => {
    try {
        const PermissionData = await Permission.find();
        res.status(200).send(PermissionData);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Get_Permissions");
        res.status(400).send(e); 
    }
};
exports.Get_PermissionById = async (req, res) => {
    try {
        const _id = req.params.id;
        const PermissionData = await Permission.findById(_id);
        res.status(200).send(PermissionData);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Get_Permissions");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Post_Permission = async (req, res) => {
    try {
        const permission = new Permission(req.body);
        const createRole = await permission.save();
        res.status(200).send(createRole);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Post_Permissions");
        logger.WriteLog("permission_controller", "Request : " + req.body);
        res.status(400).send(e); 
    }
};
exports.Patch_Permission = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchPermission = await Permission.findByIdAndUpdate(_id, req.body, {new:true});
        res.status(200).send(patchPermission);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "patch_Permissions");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Delete_Permission = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeletePermission = await Permission.findByIdAndDelete(_id);
        res.status(200).send(DeletePermission);
    } catch (e) { 
        logger.WriteLog("permission_controller", "Error : " + e, "Delete_Permissions");
        logger.WriteLog("permission_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
/* Permission Methods End */