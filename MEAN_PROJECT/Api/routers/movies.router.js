const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies.controller");
const actorsController = require("../controllers/actors.controller");

router
  .route("/movies")
  .get(moviesController.getAll)
  .post(moviesController.addOne);

router
  .route("/movies/:movieId")
  .get(moviesController.getOne)
  .delete(moviesController.deleteOne);

router
  .route("/movies/:movieId/actors")
  .get(actorsController.getAll)
  .post(actorsController.addOne)
  .delete(actorsController.deleteActor);

router.route("/movies/:movieId/actors/:actorId").get(actorsController.getOne);

module.exports = router;
