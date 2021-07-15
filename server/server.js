const express = require("express");
const app = express();
const port = 3306;
const path = require("path");
const db = require("../database");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../dist")));

// get all items in DB

app.get("/api", (req, res) => {
  res.send('hello')
});

// add item to DB

app.post("/api", (req, res) => {
  console.log(req.body)
  res.end()
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
