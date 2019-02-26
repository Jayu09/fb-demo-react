const router = require("express").Router();
const passport = require("passport");
require("../passport");
const { validateUser, schemas } = require("../helpers/schemaHelpers");
const passAuth = passport.authenticate("local", { session: false });
const JWTStrategy = passport.authenticate("jwt", { session: false });
const userController = require("../controllers/userControllers");
const multer = require("multer");
const Storage = multer.diskStorage({
	destination: function(req, file, done) {
		done(null, "./postImages");
	},
	filename: function(req, file, done) {
		done(null, new Date().toISOString() + file.originalname);
	}
});
const upload = multer({
	storage: Storage,
	limits: {
		fileSize: 1024 * 1024 * 6
	}
});

router.get(
  "/",
  JWTStrategy,
  userController.getList
);

router.post(
  "/Select",
  JWTStrategy,
  userController.getSelect
);

router.get(
  "/Details",
  JWTStrategy,
  userController.userDetails
);

router.post(
  "/Request",
  JWTStrategy,
  userController.sendRequest
);

router.post(
  "/Responce",
  JWTStrategy,
  userController.responceRequest
);

router.put(
	"/Update",
	JWTStrategy,
	upload.single("image"),
	userController.editProfie
);

router.post(
	"/register",
	validateUser(schemas.userSchema),
	userController.signUp
);
router.post(
	"/authentication",
	validateUser(schemas.authSchema),
	passAuth,
	userController.signIn
);

module.exports = router;
