const express = require("express");
const axios = require("axios");

const app = express();

const cors = require("cors");
app.use(cors());
const port = 9001;

app.use(express.json());

app.get("/api/dummy/one", async (req, res) => {
  try {
    res.status(200).json({
      message:
        "This is a dummy API response from another app that is protected via krakend",
    });
  } catch (error) {
    console.error("Error fetching from external API:", error);
    res.status(500).json({ error: "Failed to fetch data from external API" });
  }
});

app.listen(port, () => {
  console.log(`Dummy API listening at http://localhost:${port}`);
});
