const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserPost = require("../models/UserPost");
const validatePostInput = require("../validation/post");
const cors = require("cors");

//Route POST Create/Edit posts
router.options("/", cors());
router.post(
  "/",
  cors(),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const postFields = {};
    postFields.user = req.user.id;
    postFields.username = req.user.name;
    postFields.post = req.body.post;
    new UserPost(postFields).save().then(postData => res.json(postData));
  }
);

//ROUTE GET get myposts
router.options("/myposts", cors());
router.get(
  "/myposts",
  cors(),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {};
    UserPost.find({ user: req.user.id })
      .then(posts => {
        console.log(posts);
        if (posts) {
          return res.json(posts);
        } else {
          errors.error = "No profile Found";
          return res.status(404).json(errors);
        }
        console.log(posts);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

module.exports = router;
