const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

const portfolioRoutes = require("./routes/portfolio");
const newsRoutes = require("./routes/news");
const currencyRoutes = require("./routes/currency");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", portfolioRoutes);
app.use("/news", newsRoutes);
app.use("/currency", currencyRoutes);

app.use((req, res) => {
    res.status(404).render("404", { message: "Page Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
