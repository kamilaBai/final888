const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

const apiUrl = "https://v6.exchangerate-api.com/v6/bae85e2e9027df8659042f28/latest/USD";

// Route to fetch and render currency data
router.get("/", async (req, res) => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data || !data.rates) {
            return res.status(500).send("Failed to fetch currency data.");
        }

        res.render("currency", { rates: data.rates });
    } catch (error) {
        console.error("Error fetching currency data:", error);
        res.status(500).send("Error fetching currency data.");
    }
});

module.exports = router;


