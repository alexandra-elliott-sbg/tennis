var express = require('express');
var router = express.Router();
var myControllers = require('../controllers/controller.js');


router = (app) => {
    app.route('/api/bets')
    .get((req, res) => myControllers.viewAll(app, req, res))
    .post((req, res) => myControllers.addBet(app, req, res))
}


module.exports = router;