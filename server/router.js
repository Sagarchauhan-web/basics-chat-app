const express = require("express");

const router = express.Router();

router.get("/", (res, req) => {
  res.send("running ther router");
});

module.exports = router;
