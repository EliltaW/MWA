const mongoose = require("mongoose");
const Movies = mongoose.model(process.env.MOVIES_MODEL);

const getAll = function (req, res) {
  let offset = 0;
  let count = 5;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, 10);
  }

  Movies.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, movies) {
      console.log("found movies");
      res.json(movies);
    });
};

const getOne = function (req, res) {
  const movieId = req.params.movieId;
  Movies.findById(movieId).exec(function (err, movie) {
    res.status(200).json(movie);
  });
};

const addOne = function (req, res) {
  console.log("Movies addOne request");
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.genere);
  console.log(req.body.actors);

  let newMovie = {};
  newMovie.title = req.body.title;
  newMovie.year = parseInt(req.body.year, 10);
  newMovie.genere = req.body.genere;
  newMovie.actors = req.body.actors;

  Movies.create(newMovie, function (err, movie) {
    const response = { status: 201, message: movie };
    if (err) {
      console.log("Error creating movie");
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  });
};

const deleteOne = function (req, res) {
  const movieId = req.params.movieId;
  Movies.findByIdAndDelete(movieId).exec(function (err, deletedMovie) {
    const response = { status: 204, message: deletedMovie };
    if (err) {
      console.log("Error finding movie");
      response.status = 500;
      response.message = err;
    } else if (!deletedMovie) {
      console.log("Movie id not found");
      response.status = 404;
      response.message = {
        message: "Movie ID not found",
      };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports = {
  getAll,
  getOne,
  addOne,
  deleteOne,
};
