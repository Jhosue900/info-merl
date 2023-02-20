const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser")
const router = require("./src/routes/info.routes")
const events = require('events').EventEmitter.defaultMaxListeners = 50
const ejs = require("ejs")
const path = require("path")

const app = express();

// Settings

app.use('/uploads/images', express.static('./src/uploads/images'))
app.use('/uploads/videos', express.static('./src/uploads/videos'))
app.use('/uploads/pdf', express.static('./src/uploads/pdf'))
app.use('/uploads/audio', express.static('./src/uploads/audio'))


app.set("port", process.env.PORT || 4000);

app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use(router)

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));



