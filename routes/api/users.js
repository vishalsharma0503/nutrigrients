const express = require("express");
const router = express.Router();

router.get("/",()=>{console.log("Users page works")});

module.exports = router;