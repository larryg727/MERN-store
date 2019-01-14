const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const router = express.Router();

const products = require('./routes/api/products');
const categories = require('./routes/api/categories');
const user = require('./routes/api/user');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Authenticate users jwt token
app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.headers.authorization);
    // TODO: make conditions on which routes need auth
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (err, decoded) => {
        if (decoded) {
            console.log(decoded);
        } else {
            console.log(err);
        }
    });
    next();
});

//  DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('Mongo connected....'))
    .catch(err => console.log(err));

// Use Routes
router.use('/api/products', products);
router.use('/api/categories', categories);
router.use('/api/user', user);

app.use('/', router);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
