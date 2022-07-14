const Country = require("../models/countries");
const State = require("../models/states");
const Destination = require("../models/destination");
const logger = require("../models/logger");

/* Country Methods Start */
exports.Get_Country = async (req, res) => {
    try {
        const CountryData = await Country.find();
        res.status(200).send(CountryData);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Get_Countries");
        res.status(400).send(e); 
    }
};
exports.Get_CountryById = async (req, res) => {
    try {
        const _id = req.params.id;
        const CountryData = await Country.findById(_id);
        res.status(200).send(CountryData);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Get_Countries");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Post_Country = async (req, res) => {
    try {
        const country = new Country(req.body);
        const createCountry = await country.save();
        res.status(200).send(createCountry);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Post_Countries");
        logger.WriteLog("location_controller", "Request : " + req.body);
        res.status(400).send(e); 
    }
};
exports.Patch_Country = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchCountry = await Country.findByIdAndUpdate(_id, req.body, {new:true});
        res.status(200).send(patchCountry);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "patch_Countries");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Delete_Country = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteCountry = await Country.findByIdAndDelete(_id);
        res.status(200).send(DeleteCountry);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Delete_Countries");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
/* Country Methods End */
/* State Methods Start */
exports.Get_State = async (req, res) => {
    try {
        const StateData = await State.find();
        res.status(200).send(StateData);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Get_States");
        res.status(400).send(e); 
    }
};
exports.Get_StateById = async (req, res) => {
    try {
        const _id = req.params.id;
        const StateData = await State.findById(_id);
        res.status(200).send(StateData);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Get_States");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Post_State = async (req, res) => {
    try {
        const state = new State(req.body);
        const MaxDoc = await State.findOne().sort({StateId:-1});
        var MaxState=1;
        if(MaxDoc){ MaxState = MaxDoc.StateId + 1; }
        state.StateId = MaxState;
        const createState = await state.save();
        res.status(200).send(createState);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Post_States");
        logger.WriteLog("location_controller", "Request : " + req.body);
        res.status(400).send(e); 
    }
};
exports.Patch_State = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchState = await State.findByIdAndUpdate(_id, req.body, {new:true});
        res.status(200).send(patchState);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "patch_States");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Delete_State = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteState = await State.findByIdAndDelete(_id);
        res.status(200).send(DeleteState);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Delete_States");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
/* State Methods End */
/* Destination Methods Start */
exports.Get_Destination = async (req, res) => {
    try {
        const DestinationData = await Destination.find();
        res.status(200).send(DestinationData);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Get_Destinations");
        res.status(400).send(e); 
    }
};
exports.Get_DestinationById = async (req, res) => {
    try {
        const _id = req.params.id;
        const DestinationData = await Destination.findById(_id);
        res.status(200).send(DestinationData);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Get_Destinations");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Post_Destination = async (req, res) => {
    try {
        const destination = new Destination(req.body);
        const MaxDoc = await Destination.findOne().sort({DestinationId:-1});
        var MaxDestination=1;
        if(MaxDoc){ MaxDestination = MaxDoc.DestinationId + 1; }
        destination.DestinationId = MaxDestination;
        const createDestination = await destination.save();
        res.status(200).send(createDestination);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Post_Destinations");
        logger.WriteLog("location_controller", "Request : " + req.body);
        res.status(400).send(e); 
    }
};
exports.Patch_Destination = async (req, res) => {
    try {
        const _id = req.params.id;
        const patchDestination = await Destination.findByIdAndUpdate(_id, req.body, {new:true});
        res.status(200).send(patchDestination);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "patch_Destinations");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
exports.Delete_Destination = async (req, res) => {
    try {
        const _id = req.params.id;
        const DeleteDestination = await Destination.findByIdAndDelete(_id);
        res.status(200).send(DeleteDestination);
    } catch (e) { 
        logger.WriteLog("location_controller", "Error : " + e, "Delete_Destinations");
        logger.WriteLog("location_controller", "id : " + req.params.id);
        res.status(400).send(e); 
    }
};
/* Destination Methods End */