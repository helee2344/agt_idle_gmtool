const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/gmtool', function(req, res, next) {
  res.render('mail_send', {
    POST_URL_SEND_MAIL: process.env.POST_URL_SEND_MAIL,
    ADMIN_EXECUTE_FIRST_KEY: process.env.ADMIN_EXECUTE_FIRST_KEY,
    ADMIN_EXECUTE_SECOND_KEY: process.env.ADMIN_EXECUTE_SECOND_KEY,
    ADMIN_EXECUTE_THIRD_KEY: process.env.ADMIN_EXECUTE_THIRD_KEY,
  });
});

module.exports = router;
