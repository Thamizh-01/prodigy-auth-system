const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((err) => console.log("❌ DB Connection Error:", err));

app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
    console.log("🚀 Server is flying on port 5000!");
});