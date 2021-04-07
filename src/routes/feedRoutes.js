const { Router  } = require("express");
const auth = require("../middleware/auth");
const routes = Router();

const authMiddleware = require("../middleware/auth");
const FeedController = require("../controllers/FeedController");

routes.use(authMiddleware); //para que sirva en todas las rutas

routes.get("/", FeedController.show);
routes.get("/follows", FeedController.showFollow);

module.exports = routes;