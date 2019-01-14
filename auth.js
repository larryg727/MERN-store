const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const authenticate = (username, password) => {
    const results = {
        success: false,
        token: '',
        isAdmin: false
    };
    return new Promise((resolve, reject) => {
        User.findOne({ email: username })
            .then(user => {
                if (user) {
                    bcrypt
                        .compare(password, user.password)
                        .then(result => {
                            if (result) {
                                const token = jwt.sign({ user: user.email }, process.env.JWT_SECRET, { expiresIn: 2 * 60 });
                                results.success = true;
                                results.token = token;
                                results.isAdmin = user.isAdmin;
                                resolve(results);
                            } else {
                                resolve(results);
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            resolve(results);
                        });
                } else {
                    resolve(results);
                }
            })
            .catch(err => {
                console.log(err);
                resolve(results);
            });
    });
};

const verify = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (!err) {
                User.findOne({ email: decoded.user })
                    .then(user => {
                        if (user) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        resolve(false);
                    });
            } else {
                console.log(err);
                resolve(false);
            }
        });
    });
};

module.exports = {
    authenticate: authenticate,
    verify: verify
};
