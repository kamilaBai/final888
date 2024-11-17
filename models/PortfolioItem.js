const mongoose = require('mongoose');

const PortfolioItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    image1: String,
    image2: String,
    image3: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PortfolioItem', PortfolioItemSchema);
