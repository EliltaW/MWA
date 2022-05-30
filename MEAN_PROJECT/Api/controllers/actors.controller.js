// const { response } = require("express");
const mongoose = require("mongoose");
const Movie = mongoose.model(process.env.MOVIES_MODEL);
const actorController = require("../controllers/actors.controller");
const getAll = function (req, res) {
  const actorId = req.params.movieId;

  Movie.findById(actorId)
    .select("actors")
    .exec(function (err, movies) {
      console.log("found actors", movies.actors, "for movie", movies);
      res.status(200).json(movies.actors);
    });
};

const getOne = function (req, res) {
  const movieId = req.params.movieId;
  const actorId = req.params.actorId;
  Movie.findById(movieId)
    .select("actors")
    .exec(function (err, movie) {
      console.log("Found actor", movie.actors.id(actorId), "For game ", movie);
      res.status(200).json(movie.actors.id(actorId));
    });
};

const addOne = function (req, res) {
  console.log("Add one Actor controller");
  const movieId = req.params.movieId;
  Movie.findById(movieId)
    .select("actors")
    .exec(function (err, movie) {
      console.log("Found movie", movie);
      const response = { status: 200, message: movie };
      if (err) {
        console.log("Error finding movie");
        response.status = 500;
        response.message = err;
      } else if (!movie) {
        console.log("Error finding movie");
        response.status = 404;
        response.message = { message: "Movie Id not found" + movieId };
      }
      if (game) {
        _addActor(req, res, movie);
      } else {
        res.status(response.status).json(response.message);
      }
    });
};

const _addActor = function (req, res, movie) {
  movie.actors.name = req.body.name;
  movie.actors.age = req.body.age;

  movie.save(function (err, updatedMovie) {
    const response = { status: 200, message: [] };
    if (err) {
      response.status = 500;
      response.message = err;
    } else {
      response.status = 201;
      response.message = updatedMovie.actors;
    }
    res.status(response.status).json(response.message);
  });
};

const deleteActor = function (req, res, movie) {
  movie.actors = { name: "NoName" };
  movie.save(function (err, updatedMovie) {
    const response = {
      status: 204,
      message: [],
    };
    if (err) {
      response.status = 500;
      response.message = err;
    } else {
      response.status = 201;
      response.message = updatedMovie.actors;
    }
    res.status(response.status).json(response.message);
  });
};

module.exports = {
  getAll,
  getOne,
  addOne,
  deleteActor,
};
