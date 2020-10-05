var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('comunidad/comunidad', { title: 'Express' });
});

router.get('/registroTienda', function(req, res, next) {
    res.render('comunidad/comunidad_form_tienda', { title: 'Express' });
});
module.exports = router;
