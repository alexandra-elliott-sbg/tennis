var express = require('express');
var router = express.Router();
var myControllers = require('../controllers/controller.js');

router = function(app){
    app.route('/staff/:staffID')
    .get(function(req, res){
        //res.send(req.params.staffID);
        myControllers.viewSingle(app, req, res);
    });

    app.route('/api/staff')
    // now with arrow functions!
    .get((req,res)=> myControllers.viewAll(app, req, res))
    .post((req,res)=> myControllers.addStaff(app, req, res))
    .put((req,res)=> myControllers.editStaff(app, req, res))
    .delete((req,res)=> myControllers.deleteStaff(app, req, res))


}


module.exports = router;