const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const authenticate = (username, password) => {
    const result = {
        success: false,
        token: '',
        isAdmin: false
    }
    User.findOne({ email: username })
        .then(user => {
            bcrypt
                .compare(password, user.password)
                .then(result => {
                    if (result) {
                        const token = jwt.sign({ user: user.email }, process.env.JWT_SECRET, { expiresIn: 2 * 60 });
                        result.success = true
                        result.token = token
                        result.isAdmin = user.isAdmin
                        return result
                    } else {
                        return result;
                    }
                })
                .catch(err => {
                    console.log(err);
                    return result;
                });
        })
        .catch(err => {
            console.log(err);
            return result
        });
}

const verify = (token) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (!err) {
            console.log(user)
            User.findOne({ email: decoded.user })
        }
    })
}


module.exports = {
    authenticate: authenticate
}