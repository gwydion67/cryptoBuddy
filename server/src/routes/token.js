var express = require('express');
var router = express.Router();
var createError = require("http-errors");

/*
///Get
/getAll
/getOwned
/getWatched


///Put
/addToWatchlist
/removeFromWatchlist

*/

const tokenController = require('../controllers/tokenController');

router.get('/getOwned/:address/', tokenController.getToken);

router.get('/getAll', tokenController.getAllTokens);



module.exports = router;
