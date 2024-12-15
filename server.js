const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { error } = require("console");
const e = require("express");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Load private key
const privateKey = fs.readFileSync("./private.key", "utf8");

// Protected route
app.get("/data", (req, res) => {
  try {
    res.json({ message: "Protected resource accessed!" });
  } catch (e) {
    console.log(e);
  }
});

// Generate token
app.post("/generate-token", (req, res) => {
  const token = jwt.sign({ sub: "user123" }, privateKey, {
    algorithm: "RS256",
    expiresIn: "1h",
    keyid: "test-key-1",
  });
  res.json({ token });
});

// Start server
app.listen(9000, () => {
  console.log("Server running at http://localhost:9000");
});
