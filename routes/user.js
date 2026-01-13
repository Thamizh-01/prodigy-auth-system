const router = require("express").Router();
const verify = require("../middleware/verifyToken");

// This is the protected route for Task-01
router.get("/profile", verify, (req, res) => {
    res.status(200).json({
        message: "Success! You accessed a protected route.",
        user: req.user
    });
});

module.exports = router;