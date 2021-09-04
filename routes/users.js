var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/cool", function (req, res, next) {
  res.send("you are so cool");
});

module.exports = router;
// mongodb+srv://jacobmolyneux:Pigpen123@cluster0.l4mj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
