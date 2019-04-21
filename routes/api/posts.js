const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserPost = require("../models/UserPost");
const validatePostInput = require("../validation/post");
const cors = require("cors");
//@route POST Create/Edit posts
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
    postFields.post = req.body.post;
    new UserPost(postFields).save().then(postData => res.json(postData));
  }
);

module.exports = router;