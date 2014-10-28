var express = require('express');
var OkCupid = require('okcupidjs');
var router = express.Router();
var okc = new OkCupid();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('okcupid', { title: 'Happy Bandit - OkCupid Reader' });
});

/* POST Check Login. */
router.post('/login', function (req, resp) {
    console.log('username: ' + req.body.username);
    okc.login(req.body.username, req.body.password, getVisitorsList);

    function getVisitorsList(err, res, body) {
        okc.getVisitors(returnVisitors);
    };
    function returnVisitors(err, res, body) {
        for (var i in body.stalkers) {
            console.log('user: ' + body.stalkers[i].username);
        }
        resp.status(200).send(body);
    }
});

/* POST Check Login. */
router.post('/GetProfile', function (req, resp) {
    console.log('username: ' + req.body.username);
    okc.login(req.body.username, req.body.password, getSingleUserProfile);
    
    function getSingleUserProfile(err, res, body) {
        console.log('user: ' + req.body.profile);
        okc.getUserProfile(req.body.profile, returnProfile);
    }
    
    function returnProfile(err, res, body) {
        resp.status(200).send(body);
    }
});


module.exports = router;
