const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserPost = require("../models/UserPost");
const validatePostInput = require("../validation/post");
const cors = require("cors");

//Route POST Create posts
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
    console.log(req.body);
    const postFields = {
      comments:[]
    };
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
          errors.error = "No posts Found";
          return res.status(404).json(errors);
        }
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

// @Route GET api/posts/username
router.get("/:id", (req, res) => {
  //console.log(req.params.username);
  UserPost.find({ user: req.params.id })
    .then(posts => {
      var errors = {};
      console.log(posts);
      if (posts) {
        return res.json(posts);
      } else {
        errors = { error: "No Posts Found" };
        return res.status(404).json(errors);
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
