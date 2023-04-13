var Car = require('../models/car');

exports.car_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Car list');
};

exports.car_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id);
};

exports.car_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Car create POST');
};

exports.car_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
};

exports.car_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id);
};

// List of all Cars
exports.car_list = async function(req, res) {
    try{
        theCars = await Car.find();
        res.send(theCars);
    }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
   };