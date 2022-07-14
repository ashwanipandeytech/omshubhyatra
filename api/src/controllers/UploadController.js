const multer = require('multer');
const path = require('path');
const Images = require("../models/Images");
const logger = require("../models/logger");

// Set Storage Engine
const storage = multer.diskStorage({
    destination: __dirname + '/../../../assets/images/uploads',
    filename: function(req, file, cb){
        cb(
            null, // Error
            file.fieldname+'-'+Date.now()+path.extname(file.originalname) // File Name
        );
    }
});

// Check FIle Type
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;

    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    // Check MIME types
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    } else {
        cb('Error: Only Images Allowed!');
    }
}

// Init upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 9999999},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('Image');

exports.UploadImage = async (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.status(400).send(err); 
        } else {
            if(req.file === undefined){
                res.status(400).send("Please Select Image");
            }else {
                const Image = new Images();
                Image.ImageUrl = "assets/images/uploads/" + req.file.filename;
                Image.ImageName = req.file.filename;
                Save_Image_URL(Image);
                res.status(200).send(JSON.stringify(["assets/images/uploads/" + req.file.filename]));
            }
        }
    });
};
const Save_Image_URL = async (img) => {
    try {
        const images = await img.save();
        res.status(200).send(images);
    } catch (e) { 
        logger.WriteLog("package_controller", "Error : " + e, "Save_Image_URL");
        logger.WriteLog("package_controller", "Request : " + img);
        res.status(400).send(e); 
    }
};