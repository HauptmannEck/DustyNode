var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lock', function (req, res) {
    res.render('lock', { title: 'Lock - Happy Bandit' });
});

module.exports = router;
