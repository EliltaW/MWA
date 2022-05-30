const express = require("express");
const router = express.Router();
const path = require("path");
const schoolCont = require("../controllers/schoolController");

router.route("/students").get(schoolCont.getAll);
router.route("/students/:studentId").get(schoolCont.getOne);
module.exports = router;
