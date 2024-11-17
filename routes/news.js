const express = require("express");
const router = express.Router();

const apiKey = "88e7e818b65449d197b21005f950f88c";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

router.get("/", async (req, res) => {
    try {
        const fetch = (await import("node-fetch")).default; // Dynamic import for node-fetch
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== "ok") {
            return res.status(500).send("Failed to fetch news.");
        }

        res.render("news", { articles: data.articles });
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).send("Error fetching news.");
    }
});

module.exports = router;
