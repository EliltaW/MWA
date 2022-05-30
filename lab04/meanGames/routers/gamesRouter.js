const express = require("express");
const gamesController = require("../controllers/gamesController");
const router = express.Router();

router.route("/games").get(gamesController.getAll);
router.route("/games/:gameId").get(gamesController.getOne);
// router.route("/games").get(function (res, req) {
//   console.log(req.url);
//     res.status(200).send("Hello girl");
// });

module.exports = router;
