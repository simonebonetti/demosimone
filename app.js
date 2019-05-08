// Add required modules
var express = require("express");
var timeout = require("connect-timeout");
var router = express.Router();
var request = require("request");
const log4js = require("log4js");
const appName = require("./package").name;
const logger = log4js.getLogger(appName);
logger.level = require("./package").loggerLevel;
// Initialize application
var app = express();
app.use(express.static(process.cwd() + "/public"));
app.use(timeout(5000));
app.use(haltOnTimedout);
// Read environment variables
var dbUrl = process.env.DB_URL;
// Variables section
var PORT = 8082;
// Endpoints
app.get("/healthz", function(req, res) {
	logger.info("/healthz endpoint hit");
	logger.info("Application " + appName + " is healthy !!!");
	res.send("Application " + appName + " is healthy !!!")
});
app.use(errorHandler);
app.listen(PORT, function() {
	logger.info("Reading DB_URL variable from environment = " + dbUrl);
	logger.info("Application is listening on port " + PORT);
});
// ############ Common Functions
// Halt timeout
function haltOnTimedout(req, res, next){
	if (!req.timedout) next();
}
// Error Handling
function errorHandler (err, req, res, next) {
	if (res.headersSent) {
	  return next(err)
	}
	logger.error("Error : " + err);
	res.status(500);
	//res.render("error.html", { error: err });
	res.sendFile("error.html", {root : process.cwd() + "/public"});
}