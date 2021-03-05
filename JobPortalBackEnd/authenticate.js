var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const LocalStrategyEmployer = require('passport-local').Strategy;
var JobSeeker = require('./models/jobSeeker');
var Employer = require('./models/employer');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens


var config = require('./config.js');


passport.serializeUser(Employer.serializeUser());
passport.deserializeUser(Employer.deserializeUser());
passport.use('localEmployer',new LocalStrategyEmployer(Employer.authenticate()));

passport.serializeUser(JobSeeker.serializeUser());
passport.deserializeUser(JobSeeker.deserializeUser());
passport.use('local',new LocalStrategy(JobSeeker.authenticate()));



exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey,
        {expiresIn: 36000});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use('jwt',new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        Employer.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false,"error");
            }
            else if (user) {
                return done(null, user,"valid");
            }
            else {
                return done(null, false,"You are not authorized to perform this operation!");
            }
        });
    }));

exports.verifyEmployer = passport.authenticate('jwt', {session: false});

var opts1 = {};
opts1.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts1.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use('admin',new JwtStrategy(opts1,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        JobSeeker.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false,"error1");
            }
            else if (user.userType == 0) {
                return done(null, user,"valid2");
            }
            else {
                return done(null, false,"You are not authorized to perform this operation1!");
            }
        });
    }));

    exports.verifyAdmin = passport.authenticate('admin', {session: false});
    

var opts2 = {};
opts2.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts2.secretOrKey = config.secretKey;

    exports.jwtPassport = passport.use('ordinary',new JwtStrategy(opts2,
        (jwt_payload, done) => {
            console.log("JWT payload: ", jwt_payload);
            JobSeeker.findOne({_id: jwt_payload._id}, (err, user) => {
                if (err) {
                    return done(err, false,"error2");
                }
                else if (user.userType == 1 ) {
                    return done(null, user, "valid2");
                }
                else {
                    return done(null, false,"You are not authorized to perform this operation2!");
                }
            });
        }));
    
        exports.verifyJobseeker = passport.authenticate('ordinary', {session: false});

