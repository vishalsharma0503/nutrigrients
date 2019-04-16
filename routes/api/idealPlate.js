const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

router.get("/", (req, res) => {
  res.json("The Ideal Plate works");
});
//@route POST api/idealplate
//@desc Create/Generate Ideal Plate
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePlateInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const plateFields = {};
    plateFields.user = req.user.id;
  }
);
module.exports = router;
