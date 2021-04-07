const {Router} = require("express");
const routes = Router();

const AuthController = require("../controllers/AuthController");

const ValidationAuth = require("../validations/validationAuth");
const authMiddleware = require("../middleware/auth");

//const redisMiddleware = require('../middleware/redis');
//const cache_me = require('../middleware/redisCache');

//**** Routes authenticate **** *//
routes.post("/", ValidationAuth.login, AuthController.login);
//**** Routes authenticate **** *//

routes.get('/me', authMiddleware, AuthController.me);

module.exports = routes;