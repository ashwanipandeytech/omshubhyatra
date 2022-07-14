require("dotenv").config();
const express = require("express");
require("./db/conn");
const cors = require("cors");
const UserRouter = require("./routers/UserRouter");
const PermissionRouter = require("./routers/PermissionRouter");
const PackageRouter = require("./routers/PackageRouter");
const LocationRouter = require("./routers/LocationRouter");
const SeoRouter = require("./routers/SeoRouter");

const app = express();
const port = process.env.PORT || 6800;
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(UserRouter);
app.use(PermissionRouter);
app.use(PackageRouter);
app.use(LocationRouter);
app.use(SeoRouter);

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})