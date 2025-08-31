const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const useremail = "Deepa@gmail.com";
const pass = "1415";

app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

app.post("/login", (req, res) => {
  if (useremail === req.body.email && pass === req.body.password) {
    res.json(true);
  } else {
    res.json(false);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
