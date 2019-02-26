const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const users = require("../models/users");
const jwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const secrete = require("../config/secrete");

passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: secrete.JWT_SECRET
    },
    async (payload, done) => {
      try {
        const user = await users.find({ _id: payload.sub });
        if (!user) {
          return done(null, false);
        }
        done(null, user[0]);
      } catch (err) {
        done(err, false);
      }
    }
  )
);
passport.use(
  new localStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        const user = await users.findOne({ email });
        if (!user) {
          return done(null, false);
        }
        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
