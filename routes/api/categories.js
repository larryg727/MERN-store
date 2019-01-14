const express = require('express');
const router = express.Router();

const Category = require('../../models/Category');
const Subcategory = require('../../models/Subcategory');

// @route GET api/categories
// @desc Get all categories
// @access Public
router.get('/', (req, res) => {
    // Category.find()
    //     .sort({ name: 1 })
    //     .then(categories => res.json(categories));
    Category.find({})
        .populate({ path: 'subcategories', model: Subcategory })
        .exec((err, categories) => {
            if (err) {
                console.log(err);
            }
            res.json(categories);
        });
});

// @route POST api/categories/add
// @desc Create a category
// @access Public for now
router.post('/add', (req, res) => {
    const newCategory = new Category({
        name: req.body.name
    });
    newCategory
        .save()
        .then(category => res.json(category))
        .catch(err => console.log(err));
});

// @route DELETE api/categories
// @desc Delete a category
// @access Public for now
router.delete('/:id', (req, res) => {
    Category.findById(req.params.id)
        .then(category => category.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route POST api/categories/add/sub
// @desc Add a subcategory to a category
// @access Public for now
router.post('/add/sub', (req, res) => {
    const newSubcategory = new Subcategory({
        name: req.body.subName
    });
    newSubcategory
        .save()
        .then(subcategory => {
            Category.findById(req.body.id).then(category => {
                category.subcategories.push(subcategory._id);
                category.save();
            });
            return subcategory;
        })
        .then(subcategory => res.json(subcategory))
        .catch(err => console.log(err));
});

module.exports = router;
