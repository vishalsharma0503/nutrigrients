const express = require("express");
const router = express.Router();
const validateLoginInput = require("../validation/login");

router.get("/", () => {
  console.log("Users page works");
});

// @router POST api/users/login

module.exports = router;
