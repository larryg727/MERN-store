const express = require('express');
const router = express.Router();
const authenticate = require('../../auth');
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
    const results = authenticate(req.body.username, req.body.password)
    if (results.success) {
        res.json({ success: true, token: results.token, isAdmin: results.isAdmin });
    } else {
        res.json({ success: false });
    }
});

module.exports = router;
