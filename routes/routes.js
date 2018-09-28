var express = require('express');
var router = express.Router();
var myControllers = require('../controllers/controller.js');


router = (app) => {
    app.route('/api/bets')
    .get((req, res) => myControllers.viewAll(app, req, res))
    .post((req, res) => myControllers.addBet(app, req, res))

    // app.route('public/interaction.html/:userID/:teamName').get((req,res) => {
    //     controller.someFunc(app,req,res,req.params.userID,req.params.teamName)
    // })

}


module.exports = router;