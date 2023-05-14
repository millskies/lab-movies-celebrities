// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get('/celebrities/create', (req, res, next) => {
    console.log('estoy en celebrities/create')
    res.render('celebrities/new-celebrity')
})

router.post('/celebrities/create', (req, res, next) => {
    Celebrity.create(req.body)
    .then(result => {
        res.redirect('/celebrities')
    })
    .catch(err => {
        res.render("celebrities/new-celebrity")
    })
})

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(result => {
        res.render('celebrities/celebrities', {celebrity: result})
    })
    .catch(err => {console.log(err)})
})

module.exports = router;