const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Clés API Twitter
const API_KEY = "Q29OMGdIX1JxVWtRTDN3Nnl6VDM6MTpjaQ";
const API_SECRET_KEY = "aD_sXd7bM1k8Fk7ozvaAL1NEcdaXusRMX5aSVhH-6vRCoz47It";
const CALLBACK_URL = "https://social-media-dashboard-six-blond.vercel.app/auth/callback";

// Endpoint pour initialiser OAuth
app.get("/auth/twitter", async (req, res) => {
    try {
        const response = await axios.post("https://api.twitter.com/oauth/request_token", null, {
            headers: {
                Authorization: `Basic ${Buffer.from(`${API_KEY}:${API_SECRET_KEY}`).toString("base64")}`,
            },
            params: {
                oauth_callback: CALLBACK_URL,
            },
        });
        const { oauth_token } = response.data;
        res.redirect(`https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur lors de la demande OAuth.");
    }
});

// Endpoint pour gérer le callback
app.get("/auth/callback", async (req, res) => {
    const { oauth_token, oauth_verifier } = req.query;

    try {
        const response = await axios.post("https://api.twitter.com/oauth/access_token", null, {
            params: { oauth_token, oauth_verifier },
        });
        const { oauth_token: accessToken, oauth_token_secret: secretToken } = response.data;

        res.json({ accessToken, secretToken });
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur lors du callback.");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
