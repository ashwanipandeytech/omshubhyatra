const Seo = require("../models/seo");
const logger = require("../models/logger");

exports.Get_Seo = async (req, res) => {
    try {
        const SeoData = await Seo.find();
        res.status(200).send(SeoData);
    } catch (e) { 
        //console.log("seo_controller", "Error : " + e, "Get_Seo");
        res.status(400).send(e); 
    }
};

exports.Get_SeoBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;
        const SeoData = await Seo.find({"Slug":slug});
        res.status(200).send(SeoData);
    } catch (e) {
        //console.log("seo_controller", "Error : " + e, "Get_Seo");
        res.status(400).send(e);
    }
};

exports.Get_SeoById = async (req, res) => {
    try {
        const _id = req.params.id;
        const SeoData = await Seo.findById(_id);
        res.status(200).send(SeoData);
    } catch (e) { 
        logger.WriteLog("seo_controller", "Error : " + e, "Get_Seo");
        logger.WriteLog("seo_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};

exports.Post_AddSeo = async (req, res) => {
    try {
        const seo = new Seo(req.body);
        const createSeo = await seo.save();
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("seo_controller", "Error : " + e, "seo_controller");
        logger.WriteLog("seo_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};

exports.Patch_Seo = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchSeo = await Seo.findByIdAndUpdate(_id, req.body, {new:true});
        //console.log(patchSeo);
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) { 
        logger.WriteLog("seo_controller", "Error : " + e, "Get_Seo");
        logger.WriteLog("seo_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
