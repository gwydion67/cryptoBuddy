var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/:address', userController.getUser);
router.put('/:address/setWatchlist', userController.updateWatchlist);
router.get('/:address/getWatchlist', userController.getWatchlist);
router.get('/:address/getOwned', userController.getOwned);
router.put('/:address/setOwned', userController.updateOwned);


module.exports = router;
