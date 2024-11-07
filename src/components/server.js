const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/foodhunter', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobileNumber: String,
  dob: Date,
  gender: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, mobileNumber, dob, gender, password } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      mobileNumber,
      dob,
      gender,
      password: hashedPassword
    });

    await newUser.save();
    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
});

// Login Route
app.post('/user_login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Create and send a JWT token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error logging in' });
  }
});

// Route for protected content (if needed)
app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ success: false, message: 'Token missing' });

  jwt.verify(token, 'your_jwt_secret_key', (err, decoded) => {
    if (err) return res.status(403).json({ success: false, message: 'Token invalid' });
    res.json({ success: true, message: 'Protected content accessed' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
