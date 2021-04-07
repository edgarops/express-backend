const { Router } = require("express");
const multer = require('multer');
const multerConfig = require("../config/multer");

const routes = Router();

const authMiddleware = require("../middleware/auth");
const UserController = require("../controllers/UserController");
const SearchController = require("../controllers/SearchController");

const ValidationsUser = require("../validations/validationUser");


routes.get("/:username", authMiddleware, UserController.show);
routes.post("/", ValidationsUser.withPassword , UserController.store);
routes.put("/", authMiddleware, ValidationsUser.withoutPassword , UserController.update);
routes.put("/password-update", authMiddleware, ValidationsUser.password, UserController.updatePassword);
routes.put("/avatar", authMiddleware, multer(multerConfig).single("file"), UserController.updateAvatar);

routes.get('/search/:term', authMiddleware, SearchController.search);

module.exports = routes;