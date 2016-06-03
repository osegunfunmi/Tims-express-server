/**
 * Created by tabradford on 6/1/2016.
 */
var express = require('express');
var passport = require('passport');
var router = express.Router();


/* GET users listing. */
router.get('/google/callback').get(passport.authenticate('google', {
    successRedirect: '/users/',
    failer: '/errer/'
}));

router.route('/google')
    .get(passport.authenticate('google',
        {
            scope: ['https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email']
        }
    ));

module.exports = router;
