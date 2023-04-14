var express = require('express');
const car_controllers = require('../controllers/car');
var router = express.Router();

/* GET home page. */
router.get('/', car_controllers.car_view_all_Page);

module.exports = router;
