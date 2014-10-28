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
        okc.getVisitors(getProfiles);
    };
    function getProfiles(err, res, body) {
        for (var i in body.stalkers) {
            console.log('user: ' + body.stalkers[i].username);
            //okc.getUserProfile(body.stalkers[i].username, GetSingleUserProfile);
        }
        resp.status(200).send(body);
    }
});


module.exports = router;
