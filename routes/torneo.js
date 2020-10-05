var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('torneo/torneo_bases', { title: 'Express' });
});

router.get('/inscripcion', function(req, res, next) {
    res.render('torneo/torneo_inscripcion', { title: 'Express' });
});

module.exports = router;
