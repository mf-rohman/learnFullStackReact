const express = require("express");
const router = express.Router();
const connection = require("../config/database.js");

/* GET users listing. */
router.get("/users", function (req, res) {
  connection.query("SELECT * FROM fullstackjs.users", function (err, rows) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database Query Failed" });
    } else {
      return res.status(200).json({
        status: true,
        message: "Data returned successfully",
        userData: rows
      });
    }
  });

  // res.send('respond with a resource');
});

module.exports = router;
