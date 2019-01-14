const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const auth = require('./auth');

require('dotenv').config();

const router = express.Router();

const products = require('./routes/api/products');
const categories = require('./routes/api/categories');
const user = require('./routes/api/user');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Authenticate users jwt token
app.use(async (req, res, next) => {
    console.log(req.url);
    // TODO: make conditions on which routes need auth
    if (req.url === '/api/user/authenticate') {
        next();
    } else {
        const verified = await auth.verify(req.headers.authorization);
        if (verified) {
            console.log('verifieeedd...');
            next();
        } else {
            res.status(401).send('Unauthorized');
        }
    }
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
