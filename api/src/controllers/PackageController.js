const Package = require("../models/packages");
const Itinerary = require("../models/itineraries");
const Category = require("../models/category");
const Banner = require("../models/banner");
const Offer = require("../models/offer");
const Popup = require("../models/popup");
const Destination = require("../models/destination");
const logger = require("../models/logger");

/* Package Methods Start */
exports.Get_Package = async (req, res) => {
    try {
        const PackageData = await Package.find();
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Packages");
        res.status(400).send(e);
    }
};

exports.Get_PackageById = async (req, res) => {
    try {
        const _id = req.params.id;
        const PackageData = await Package.findById(_id);
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Packages");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_PackageByPackageId = async (req, res) => {
    try {
        const _id = req.params.id;
        const PackageData = await Package.findOne({PackageId:_id});
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Packages");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Search_Package = async (req, res) => {
    try {
        const _dest = req.params.dest;
        const _type = req.params.type;
        var _day = req.params.day;
        var _sday = 0;
        if(!_day || _day==0){_sday=0;_day=12}
        else{_sday=_day-1;_day=+_day + 1}
        var _price = req.params.price;
        var _sprice = 0;
        if(_price == 20000){
            _sprice = 0;
        } 
        else if(_price == 50000){
            _sprice = 20000;
        } 
        else if(_price == 100000){
            _sprice = 50000;
        }
        else if(_price == 200000){
            _sprice = 100000;
        }
        else{
            _sprice = 200000;
        }
        if(!_price || _price==0){_price = 500000; _sprice = 0;}
        const ItineraryData = await Itinerary.find({
            Cities: {
                $regex: '.*' + _dest + '.*'
            }
        }, {
            PackageId: 1,
            _id: 0
        });
        var packageid = ItineraryData.map(function(obj) {
            return obj.PackageId;
        });
        const PackageData = await Package.find({
            $and: [{CategoryId: _type},
            {PackageId: {
                $in: packageid
            }},
            {NoOfDays: {
                $lte: _day
            }},
            {NoOfDays: {
                $gte: _sday
            }},
            {Price: {
                $gte: _sprice
            }},
            {Price: {
                $lte: _price
            }}]
        });
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Search_Package");
        logger.WriteLog("package_controller", "params : " + req.params);
        res.status(400).send(e);
    }
};

exports.Get_PackagesByCategoryId = async (req, res) => {
    try {
        const _id = req.params.id;
        const PackageData = await Package.find({
            CategoryId: _id
        }).sort({
            Priority: 1
        });
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_PackagesByCategoryId");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_PackagesByCategoryIdFD = async (req, res) => {
    try {
        const _id = req.params.id;
        const PackageData = await Package.find({
            CategoryId: _id,
            Type:4
        }).sort({
            Priority: 1
        });
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_PackagesByCategoryId");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_ExecutionByCategoryId = async (req, res) => {
    try {
        const _id = req.params.id;
        const PackageData = await Package.find({
            CategoryId: _id
        },{Executed:1}).distinct( "Executed" );
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_GetExecutionByCategoryId");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_PackagesBySlug = async (req, res) => {
    try {
        const _id = req.params.id;
        const PackageData = await Package.findOne({
            PackageSlug: _id
        });
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_PackagesBySlug");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_PackagesByKey = async (req, res) => {
    try {
        const _id = req.params.id;
        const PackageData = await Package.find({
            Keys: _id
        }).sort({
            Priority: 1
        });
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_PackagesByKey");
        logger.WriteLog("package_controller", "Key : " + req.params.id);
        res.status(400).send(e);
    }
};


exports.Get_OfferByNumber = async (req, res) => {
    try {
        const _id = req.params.id;
        const OfferData = await Offer.find({
            OfferNumber: _id
        }).sort({
            Priority: 1
        });
        res.status(200).send(OfferData);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.Get_PackagesByDestination = async (req, res) => {
    try {
        const _id = req.params.id;
        const destination = await Destination.findOne({
            DestinationSlug: _id
        }).sort({
            DestinationId: -1
        });
        const _dest = destination.DestinationName;
        const ItineraryData = await Itinerary.find({
            Cities: {
                $regex: '.*' + _dest + '.*'
            }
        }, {
            PackageId: 1,
            _id: 0
        });
        var packageid = ItineraryData.map(function(obj) {
            return obj.PackageId;
        });
        const PackageData = await Package.find({
            PackageId: {
                $in: packageid
            }
        });
        res.status(200).send(PackageData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_PackagesByDestination");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Post_Package = async (req, res) => {
    try {
        req.body.Images = [{
            Image: req.body.Image
        }];
        req.body.IsActive = true;
        req.body.CreatedBy = "OSY001";
        req.body.CreatedOn = "";

        const package = new Package(req.body);
        const MaxDoc = await Package.findOne().sort({
            PackageId: -1
        });
        var MaxPackage = 1;
        if (MaxDoc) {
            MaxPackage = MaxDoc.PackageId + 1;
        }
        package.PackageId = MaxPackage;
        const createPackage = await package.save();
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Post_Packages");
        logger.WriteLog("package_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};

exports.Patch_Package = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchPackage = await Package.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Packages");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.Delete_Package = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeletePackage = await Package.findByIdAndDelete(_id);
        res.status(200).send(DeletePackage);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Delete_Packages");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

/* Package Methods End */
/* Itinerary Methods Start */
exports.Get_Itinerary = async (req, res) => {
    try {
        const ItineraryData = await Itinerary.find();
        res.status(200).send(ItineraryData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Itineraries");
        res.status(400).send(e);
    }
};

exports.Get_ItineraryById = async (req, res) => {
    try {
        const _id = req.params.id;
        const ItineraryData = await Itinerary.findById(_id);
        res.status(200).send(ItineraryData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Itineraries");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_PackageItinerary = async (req, res) => {
    try {
        const PackageId = req.params.PackageId;
        const ItineraryData = await Itinerary.find({
            PackageId: PackageId
        });
        res.status(200).send(ItineraryData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_PackageItinerary");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Post_Itinerary = async (req, res) => {
    try {
        const itinerary = new Itinerary(req.body);
        const createItinerary = await itinerary.save();
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Post_Itineraries");
        logger.WriteLog("package_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};

exports.Patch_Itinerary = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchItinerary = await Itinerary.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Itineraries");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Delete_Itinerary = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteItinerary = await Itinerary.findByIdAndDelete(_id);
        res.status(200).send(DeleteItinerary);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Delete_Itineraries");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

/* Itinerary Methods End */
/* Package Type Methods Start */
exports.Get_Category = async (req, res) => {
    try {
        const CategoryData = await Category.find();
        res.status(200).send(CategoryData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Category");
        res.status(400).send(e);
    }
};

exports.Get_Category_Web = async (req, res) => {
    try {
        const CategoryData = await Category.find({"IsActive":true});
        res.status(200).send(CategoryData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Category");
        res.status(400).send(e);
    }
};

exports.Get_CategoryById = async (req, res) => {
    try {
        const _id = req.params.id;
        const CategoryData = await Category.find({
            CategoryId: _id
        });
        res.status(200).send(CategoryData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Category");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
exports.Get_CategoryByType = async (req, res) => {
    try {
        const _type = req.params.id;
        const CategoryData = await Category.find({ 
            Keys: { 
                $elemMatch: { 
                    Key: _type
                }
            },
            IsActive:true
        });
        res.status(200).send(CategoryData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_CategoryByType");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Post_Category = async (req, res) => {
    try {

        let selectedKeys = [];
        const Keys = req.body.Keys;
        for (const key in Keys) {
            if (Object.hasOwnProperty.call(Keys, key)) {
                const element = Keys[key];

                var obj = {};
                obj["Key"] = element;

                selectedKeys.push(obj);
            }
        }
        req.body.Keys = selectedKeys;

        req.body.IsActive = true;
        req.body.CreatedBy = "OSY001";
        req.body.CreatedOn = "";

        const category = new Category(req.body);
        const MaxDoc = await Category.findOne().sort({
            CategoryId: -1
        });
        var MaxType = 1;
        if (MaxDoc) {
            MaxType = MaxDoc.CategoryId + 1;
        }
        category.CategoryId = MaxType;
        const createCategory = await category.save();
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Post_Category");
        logger.WriteLog("package_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};


exports.Get_Banner = async (req, res) => {
    try {
        const BannerData = await Banner.find();
        res.status(200).send(BannerData);
    } catch (e) {
        logger.WriteLog("banner_controller", "Error : " + e, "Get_Banner");
        res.status(400).send(e);
    }
};


exports.Get_Offer = async (req, res) => {
    try {
        const OfferData = await Offer.find();
        res.status(200).send(OfferData);
    } catch (e) {
        logger.WriteLog("offer_controller", "Error : " + e, "Get_Offer");
        res.status(400).send(e);
    }
};


exports.Get_Popup = async (req, res) => {
    try {
        const PopupData = await Popup.find();
        res.status(200).send(PopupData);
    } catch (e) {
        logger.WriteLog("banner_controller", "Error : " + e, "Get_Banner");
        res.status(400).send(e);
    }
};

exports.Patch_Banner = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchCategory = await Banner.findByIdAndUpdate({_id:_id}, req.body, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Category");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_BannerById = async (req, res) => {
    try {
        const _id = req.params.id;
        const BannerData = await Banner.find({
            _id: _id
        });
        res.status(200).send(BannerData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_Banner");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_OfferById = async (req, res) => {
    try {
        const _id = req.params.id;
        const OfferData = await Offer.find({
            _id: _id
        });
        res.status(200).send(OfferData);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.Post_Banner = async (req, res) => {
    try {
        const banner = new Banner(req.body);
        const createBanner = await banner.save();
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        //console.log("package_controller", "Error : " + e, "Post_Category");
        //console.log("package_controller", "Request : " + req.body);
        res.status(400).send(e);
    }
};

exports.Delete_Banner = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteBanner = await Banner.findByIdAndDelete(_id);
        res.status(200).send(DeleteBanner);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Delete_Banner");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};


exports.Post_Offer = async (req, res) => {
    try {
        const offer = new Offer(req.body);
        const createOffer = await offer.save();
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.Delete_Offer = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteOffer = await Offer.findByIdAndDelete(_id);
        res.status(200).send(DeleteOffer);
    } catch (e) {
        res.status(400).send(e);
    }
};


exports.Patch_Popup = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchPopup = await Popup.findByIdAndUpdate({_id:_id}, req.body, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Category");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Get_PopupById = async (req, res) => {
    try {
        const _id = req.params.id;
        const PopupData = await Popup.find({
            _id: _id
        });
        res.status(200).send(PopupData);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Get_PopupById");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Delete_Popup = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeletePopup = await Popup.findByIdAndDelete(_id);
        res.status(200).send(DeletePopup);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Delete_Popup");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.DeActivate_Popup = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchPopup = await Popup.findByIdAndUpdate({_id:_id}, {'IsActive':false}, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Popup");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Activate_Popup = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchPopup = await Popup.findByIdAndUpdate({_id:_id}, {'IsActive':true}, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Popup");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Patch_Category = async (req, res) => {
    try {
        const _id = req.params.id;

        let selectedKeys = [];
        const Keys = req.body.Keys;
        for (const key in Keys) {
            if (Object.hasOwnProperty.call(Keys, key)) {
                const element = Keys[key];

                var obj = {};
                obj["Key"] = element;

                selectedKeys.push(obj);
            }
        }
        req.body.Keys = selectedKeys;
        const CategoryData = await Category.findOne({
            CategoryId: _id
        });
        const patchCategory = await Category.findByIdAndUpdate({_id:CategoryData._id}, req.body, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Category");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};


exports.DeActivate_Category = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchCategory = await Category.findByIdAndUpdate({_id:_id}, {'IsActive':false}, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Category");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Activate_Category = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchCategory = await Category.findByIdAndUpdate({_id:_id}, {'IsActive':true}, {
            new: true
        });
        res.status(200).send(JSON.stringify({"success": true}));
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "patch_Category");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};

exports.Delete_Category = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteCategory = await Category.findByIdAndDelete(_id);
        res.status(200).send(DeleteCategory);
    } catch (e) {
        logger.WriteLog("package_controller", "Error : " + e, "Delete_Category");
        logger.WriteLog("package_controller", "id : " + req.params.id);
        res.status(400).send(e);
    }
};
/* Package Type Methods End */