var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    title: "Home",
    content: "Welcome",
    message: "qwertyuiop"
  })
  console.log(res)
  return res
});

module.exports = router;
