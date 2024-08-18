var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/:address', userController.getUser);
router.put('/:address/watchlist', userController.updateWatchlist);

module.exports = router;
