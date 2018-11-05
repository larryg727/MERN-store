const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

const products = require('./routes/api/products');
const categories = require('./routes/api/categories');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//  DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('Mongo connected....'))
    .catch(err => console.log(err));

// Use Routes
router.use('/api/products', products);
router.use('/api/categories', categories);

app.use('/', router);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
