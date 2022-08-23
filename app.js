const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("./environment/environmentVar");
const indexRouter = require("./routes/index");
const cors = require("cors");


const app = express();

// -----------Middlewares-----------------------------------------------------
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//Middlewares ends -------------------------------------------------------------

// Index Routing starts

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});




app.listen(config.PORT, config.host, () => console.log(`DemoAwsNode app Started and listening on port ${config.PORT}!`));


// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	return res.send({
		apiResponseCode: err.status.toString() || "500",
		apiResponseMessage: err.message,
		apiResponseFrom: "NODE",
		apiResponseTime: new Date().toLocaleString(),
		apiResponseData: {}
	});
});


module.exports = app;