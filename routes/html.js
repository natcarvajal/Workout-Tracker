// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const router = require("express").Router();
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// If no matching route is found default to home
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
