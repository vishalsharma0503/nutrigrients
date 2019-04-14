const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateProfileInput = require("../validation/profile");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const Profile = require("../models/Profile");

router.get("/", () => {
  console.log("Profiles page works");
});

// @route POST api/profiles/
// @desc Create/Edit profile
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
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
    // Skills - Spilt into array
    // if (typeof req.body.skills !== 'undefined') {
    //     profileFields.skills = req.body.skills.split(',');
    // }

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        Profile.findOne({ username: profileFields.username }).then(profile => {
          if (profile) {
            errors.username = "That username already exists";
            res.status(400).json(errors);
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

module.exports = router;
