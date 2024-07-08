const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
