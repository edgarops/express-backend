const {Router} = require("express");
const routes = Router();

const authMiddleware = require("../middleware/auth");
const FollowController = require("../controllers/FollowController");

routes.use(authMiddleware);

routes.post("/:user_id", FollowController.store);

module.exports = routes;
