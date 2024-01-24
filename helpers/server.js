const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");

// SERVER CONFIG
const PORT = process.env.PORT || 6000;
const app = express();
const server = http
  .createServer(app)
  .listen(PORT, () => console.log(`Listening on ${PORT}\n`));

app.get("/", (req, res) => {
  res.json({ message: "I'm Alive" });
});

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ credentials: true, origin: "*" }));
