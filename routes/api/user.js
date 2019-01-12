const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../../models/User');

// @route POST api/user/register
// @desc Create a User
// @access Public
router.post('/register', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    newUser.save().then(user => console.log(user) || res.json({ result: true }));
});

router.post('/authenticate', (req, res) => {
    console.log(req.body);
    User.findOne({ email: req.body.username })
        .then(user => {
            if (user) {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then(result => {
                        console.log('result: ', result);
                        res.json({ success: result });
                    })
                    .catch(err => {
                        console.log(err);
                        res.json({ success: false });
                    });
            } else {
                res.json({ success: false });
            }
        })
        .catch(err => {
            console.log(err);
            res.json({ success: false });
        });
});

module.exports = router;
