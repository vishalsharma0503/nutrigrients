const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateProfileInput = require("../validation/profile");
const Profile = require("../models/Profile");
const plate = require("../../utils/plate");
const cors = require("cors");

// router.get("/", () => {
//   console.log("Profiles page works");
// });

// @route GET api/profiles/all
// @desc Fetch all profiles
// @access Private
router.options("/all", cors());
router.get(
  "/all",
  cors(),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {};
    Profile.find({})
      .populate("users")
      .exec((err, docs) => {
        if (err) {
          console.log(err);
          errors.error = "Could not complete the request";
          return res.status(500).json(errors);
        }
        //console.log(docs);
        res.json(docs);
      });
  }
);

// @route GET api/profiles/myprofile
// @desc Fetch current profile
// @access Private
router.options("/myprofile", cors());
router.get(
  "/myprofile",
  cors(),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name"])
      .then(profile => {
        if (profile) {
          return res.json(profile);
        } else {
          errors.error = "No profile Found";
          return res.status(404).json(errors);
        }
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

// @route GET api/profiles/username
// @desc fetch profile
// @access Public
router.get("/username/:username", (req, res) => {
  errors = {};
  Profile.findOne({ username: req.params.username })
    .populate("user", ["name", "email"])
    .then(profile => {
      if (!profile) {
        //console.log("username is: ", req.params.username);
        errors.error = "Profile Not Found";
        return res.status(404).json(errors);
      }
      return res.json(profile);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// @route POST api/profiles/
// @desc Create/Edit profile
// @access Private

router.options("/", cors());
router.post(
  "/",
  cors(),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateProfileInput(req.body);
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.age) profileFields.age = req.body.age;
    if (req.body.username) profileFields.username = req.body.username;
    if (req.body.height) profileFields.height = req.body.height;
    if (req.body.weight) profileFields.weight = req.body.weight;
    if (req.body.gender) profileFields.gender = req.body.gender;
    if (req.body.allergies) profileFields.allergies = req.body.allergies;
    if (req.body.conditions) profileFields.conditions = req.body.conditions;
    if (req.body.foodType) profileFields.foodType = req.body.foodType;
    if (req.body.bodyShape) profileFields.bodyShape = req.body.bodyShape;
    if (req.body.facebook) profileFields.facebook = req.body.facebook;
    if (req.body.instagram) profileFields.instagram = req.body.instagram;
    if (req.body.twitter) profileFields.twitter = req.body.twitter;
    if (req.body.youtube) profileFields.youtube = req.body.youtube;
    profileFields.followers = [];

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        if (
          profile.height !== profileFields.height ||
          profile.weight !== profileFields.weight
        ) {
          let data = {};
          data.weight = profileFields.weight;
          data.height = profileFields.height;
          plate(data, profileFields);
          //profileFields.idealPlate = idealPlate;
        }
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        let data = {};
        data.weight = profileFields.weight;
        data.height = profileFields.height;
        plate(data, profileFields);

        Profile.findOne({ username: profileFields.username }).then(profile => {
          if (profile) {
            errors.username = "That username already exists";
            return res.status(400).json(errors);
          } else {
            // Save Profile
            new Profile(profileFields)
              .save()
              .then(profile => res.json(profile));
          }
        });
      }
    });
  }
);

router.options("/follow", cors());
router.post(
  "/follow",
  cors(),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.body.fid }).then(profile => {
      console.log(req)
      profile.followers.push(req.body.username);
      Profile.findOneAndUpdate(
        { user: req.body.fid },
        { $set: profile},
        { new: true }
      ).then(profile => { res.json(profile)});
    });

    // Profile.findOneAndUpdate(
    //   { user: req.body.fid },
    //   { $set: profileFields },
    //   { new: true }
    // ).then(profile => res.json(profile)
    // );
  }
);

module.exports = router;
