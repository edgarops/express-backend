const {Router} = require("express");
const multer = require('multer');
const multerConfig = require("./config/multer");

const routes = Router();

const authMiddleware = require("./middleware/auth");

const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const PhotoController = require("./controllers/PhotoController.js");
const LikeController = require("./controllers/LikeController.js");

const ValidationsUser = require("./validations/validationUser");
const ValidationAuth = require("./validations/validationAuth");

//**** Routes authenticate **** *//
routes.post("/auth", ValidationAuth.login, AuthController.login);
//**** Routes authenticate **** *//

routes.get("/users/:username", authMiddleware, UserController.show);
routes.post("/users", ValidationsUser.withPassword , UserController.store);
routes.put("/users", authMiddleware, ValidationsUser.withoutPassword , UserController.update);
routes.put("/password-update", authMiddleware, ValidationsUser.password, UserController.updatePassword);
routes.put("/avatar", authMiddleware, multer(multerConfig).single("file"), UserController.updateAvatar);

//**** Routes User **** *//

//**** Routes Photos **** *//
routes.get("/photos/:id", authMiddleware, PhotoController.show);
routes.post("/photos", authMiddleware, multer(multerConfig).single("file"), PhotoController.store);
routes.delete("/photos/:id", authMiddleware, PhotoController.destroy);
//**** Routes Photos **** *//

//**** Routes Likes **** *//
routes.post("/likes/:photo", authMiddleware, LikeController.store);
//**** Routes Likes **** *//

module.exports = routes;