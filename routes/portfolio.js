const express = require('express');
const router = express.Router();
const PortfolioItem = require('../models/PortfolioItem');

// Portfolio Homepage
router.get('/', async (req, res) => {
    const items = await PortfolioItem.find();
    res.render('index', { items });
});

// Manage Portfolio (Admin)
router.get('/manage', async (req, res) => {
    const items = await PortfolioItem.find();
    res.render('manage', { items });
});

// Create Portfolio Item (Form)
router.get('/create', (req, res) => {
    res.render('form', { item: {} });
});

// Create Portfolio Item (Submit)
router.post('/create', async (req, res) => {
    await PortfolioItem.create(req.body);
    res.redirect('/manage');
});

// Edit Portfolio Item (Form)
router.get('/edit/:id', async (req, res) => {
    const item = await PortfolioItem.findById(req.params.id);
    res.render('form', { item });
});

// Update Portfolio Item
router.post('/edit/:id', async (req, res) => {
    await PortfolioItem.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/manage');
});

// Delete Portfolio Item
router.get('/delete/:id', async (req, res) => {
    await PortfolioItem.findByIdAndDelete(req.params.id);
    res.redirect('/manage');
});

module.exports = router;
