const {Router} = require("express");


const routes = Router();

const authMiddleware = require("./middleware/auth");

const LikeController = require("./controllers/LikeController.js");

//**** Routes Likes **** *//
routes.post("/likes/:photo", authMiddleware, LikeController.store);
//**** Routes Likes **** *//

module.exports = routes;