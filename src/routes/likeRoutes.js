const {Router} = require("express");


const routes = Router();

const authMiddleware = require("../middleware/auth");

const LikeController = require("../controllers/LikeController.js");

routes.use(authMiddleware);

//**** Routes Likes **** *//
routes.post("/:photo", LikeController.store);
//**** Routes Likes **** *//

module.exports = routes;