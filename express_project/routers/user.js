// user相關路由集結
var express = require('express');
var router = express.Router();

router.get('/edit', function(req, res) {
  res.send('user_edit');
});

router.get('/photo', function(req, res) {
  res.send('user_photo');
});

module.exports = router;
