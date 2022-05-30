const schoolData = require("../data/school.json");

const getAll = (req, res) => {
  //console.log("-----Testing----");
  res.status(200).json(schoolData);
};

const getOne = (req, res) => {
  const index = req.params.studentId;
  res.status(200).json(schoolData[index]);
};

module.exports = {
  getAll,
  getOne,
};
