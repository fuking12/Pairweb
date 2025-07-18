const express = require("express");
const app = express();
const fs = require("fs");
const __path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let code = require("./pair");
require("events").EventEmitter.defaultMaxListeners = 500;

// Create session directory if it doesn't exist
if (!fs.existsSync("./session")) {
  fs.mkdirSync("./session");
}

app.use("/code", code);

app.use("/", async (req, res, next) => {
  res.sendFile(__path + "/pair.html");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`⏩ Server running on http://localhost:${PORT}`);
});

module.exports = app;
