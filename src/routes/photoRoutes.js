const {Router} = require("express");
const routes = Router();
const multer = require('multer');
const multerConfig = require("../config/multer");

const authMiddleware = require("../middleware/auth");
const PhotoController = require("../controllers/PhotoController.js");

routes.use(authMiddleware);

routes.get("/:id", PhotoController.show);
routes.post("/", multer(multerConfig).single("file"), PhotoController.store);
routes.delete("/:id", PhotoController.destroy);


module.exports = routes;