const express = require("express");
const ejs = require("ejs");
const path = require("path");
// const expressLayout = require("express-ejs-layouts");
const app = express();
const { PORT = 3000 } = process.env;

// app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => res.render("home"));
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
