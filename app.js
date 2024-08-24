// app.js
const path = require('path');
const express = require("express");
const app = express();
const router = require("./routes/index")

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
