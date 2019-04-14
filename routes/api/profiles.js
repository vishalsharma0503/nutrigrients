const express = require("express");
const router = express.Router();

router.get("/",()=>{console.log("Profiles page works")});

module.exports = router;