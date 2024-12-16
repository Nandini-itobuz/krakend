const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/data", (_req, res) => {
  try {
    res.json({ message: "Protected resource accessed!" });
  } catch (e) {
    console.log(e);
  }
});

app.post("/generate-token", (_req, res) => {
  const payload = {
    userId: "1",
  };
  const token = jwt.sign(payload, "SECRETKEY00001", {
    algorithm: "HS256",
    expiresIn: "1d",
    header: {
      kid: "sim2",
    },
  });
  res.json({ token });
});

app.listen(9000, () => {
  console.log("Server running at http://localhost:9000");
});
