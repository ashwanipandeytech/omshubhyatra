const fs = new require("fs");
var df = require("dateformat");
var path = require('path');

const Write = async (file, message) =>{
    var _fldr = __dirname + "/../logs/" + df(new Date(), "mmm-yyyy");
    var _path = path.join(_fldr, file + ".log");
    fs.mkdir(_fldr,(err)=>{});
    fs.chmod(_fldr, 0777, (err) => {})
    fs.access(_fldr, fs.constants.R_OK | fs.constants.W_OK, (err) => {
        if (err) {
            fs.mkdir(_fldr,(err)=>{});
            fs.chmod(_fldr, 0777, (err) => {})
        }
    });
    fs.exists(_path, function(exists) {        
        if (message.split(':')[0].length <= 15)
        {
            for (var i = message.split(':')[0].length; i <= 16; i++)
            {
                message = " " + message;
            }
        }
        if(exists){
            var stats = fs.statSync(_path);
            var _fSizeByte = stats.size;
            if(_fSizeByte > 1048576){
                var _path2 = _fldr + "\\" + file + "_" + dt.format("yyyy-mm-dd") + ".log";
                fs.rename(_path, _path2, function(err) {
                    //if ( err ) WriteLog("logger", "Error : " + err, "write");
                });
            }
            fs.appendFile(_path,message,(err)=>{
                //if ( err ) WriteLog("logger", "Error : " + err, "write");
            })
        }
        else{
            fs.writeFile(_path,message,(err)=>{
                //if ( err ) WriteLog("logger", "Error : " + err, "write");
            })
        }
    });
}
const WriteLog = async (file, message, func = null) => {
    
    if(func){
        var dts = "-----------------------";
        var _hdng = dts + dts + dts + "\n" + dts + df(new Date(), "dd mmm yyyy hh:MM:ss TT") + dts + "\n";
        await Write(file, _hdng);
        _hdng = "Function : " + func + "\n";
        await Write(file, _hdng);
    }
    await Write(file, message + "\n");
}
exports.WriteLog = WriteLog;