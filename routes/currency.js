const express = require("express");
const router = express.Router();

const apiUrl = "https://open.er-api.com/v6/latest/USD"; // Replace with your API

router.get("/", async (req, res) => {
    try {
        const fetch = (await import("node-fetch")).default; // Use dynamic import for node-fetch
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
