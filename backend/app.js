const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const accessories = require("./routes/accessoriesRoute");
const units = require("./routes/unitPriceRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", accessories);
app.use("/api/v1", units);

// Middleware For Error
app.use(errorMiddleware);

module.exports = app;
