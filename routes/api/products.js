const express = require('express');
const router = express.Router();

// Product model
const Product = require('../../models/Product');

// @route GET api/products
// @desc Get all products
// @access Public
router.get('/', (req, res) => {
    Product.find()
        .sort({ name: 1 })
        .then(products => res.json(products));
});

// @route POST api/products
// @desc Create a products
// @access Public
router.post('/', (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });
    newProduct.save().then(product => res.json(product));
});

// @route DELETE api/products
// @desc Delete a products
// @access Public
router.delete('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
