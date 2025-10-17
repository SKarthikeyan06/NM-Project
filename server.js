const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/formValidationDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB error:", err));
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true }
});
const User = mongoose.model("User", UserSchema);
app.post("/register", async (req, res) => {
  try {
    const { email, password, phone } = req.body;
    if (!email || !password || !phone) {
      return res.status(400).json({ error: "All fields required" });
    }
    const newUser = new User({ email, password, phone });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: "Email already exists" });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));