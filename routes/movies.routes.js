const Movie = require("../models/movie.model");
const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get('/movies/create', (req, res, next) => {
    Celebrity.find()
    .then(dbCele => {
        res.render('movies/new-movie', dbCele)
    })
    .catch(err => {
        res.render('movies/new-movie')
    })
})

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(result => {
        res.render("movies/movies", {movie: result})
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/movies/create', (req, res, next) => {
    Movie.create(req.body)
    .then(result => {
        res.redirect('/movies')
    })
    .catch(err => {
        res.render("movies/new-movie")
    })
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .populate('cast')
    .then(result => {
        res.render('movies/movie-details', {movie: result});
    })
    .catch(err => {
        console.log(err)
    })
})
module.exports = router;