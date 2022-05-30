// const { ObjectId } = require("bson");
const dbConnection = require("../data/db");
const ObjectId = require("mongodb").ObjectId;

const getAll = function (req, res) {
  const db = dbConnection.get();

  let offset = 0;
  let count = 5;
  const gamesCollection = db.collection("games");

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  }
  gamesCollection
    .find()
    .skip(offset)
    .limit(count)
    .toArray(function (err, games) {
      res.status(200).json(games);
    });
};

const getOne = function (req, res) {
  console.log(req.params.gameId);

  const db = dbConnection.get();
  const gamesCollection = db.collection("games");
  const gameId = new mongodb.ObjectId(req.params.gameId);
  console.log("&&&&&&&&&&&&&&&*******************", gameId);
  gamesCollection.findById({ _id: ObjectId(gameId) }, function (err, game) {
    res.status(200).json(game);
  });
};

module.exports = {
  getAll,
  getOne,
};
