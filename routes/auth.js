const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        console.error("❌ Registration Error:", err); // This prints the REAL error to your terminal
        res.status(500).json({ message: "Error saving user", detail: err.message });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json("Wrong User Name!");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).json("Wrong Password!");

        const accessToken = jwt.sign(
            { id: user._id },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...info } = user._doc;
        res.status(200).json({ ...info, accessToken });
    } catch (err) {
        console.error("❌ Login Error:", err);
        res.status(500).json(err);
    }
});

module.exports = router;