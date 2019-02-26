const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const post = require("./routes/post");
const users = require("./routes/users");
const db = require("./config/keys").URI;
const app = express();
//database connectivity
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.catch(err => {
		throw err;
	});
//app configuration
app.use("/images/postImages", express.static("postImages"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		secret: "secrete",
		resave: true,
		saveUninitialized: true
	})
);
//app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());
// handle routes
app.use("/api/posts", post);
app.use("/api/users", users);
//port declaration
const Port = process.env.PORT || 3010;
app.listen(Port);
