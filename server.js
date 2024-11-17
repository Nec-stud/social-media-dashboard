const express = require("express");
const app = express();

app.get("/auth/twitter", (req, res) => {
    res.send("Route /auth/twitter fonctionnelle !");
});

app.get("/auth/callback", (req, res) => {
    res.send("Route /auth/callback fonctionnelle !");
});

module.exports = app;
