const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const Booking = require('../Models/Booking');
const authenticate = require('../Controller/authMiddleware');

const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, phone, password: hashedPassword });
    const userCreated = await user.save();

    res.status(201).json({ message: 'User registered', user: userCreated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});

// ✅ POST /api/auth/book - Create booking (Protected)
router.post('/book', authenticate, async (req, res) => {
  try {
    const { bookingDate, members, location, name } = req.body;
    if (!bookingDate || !members || !location) {
      return res.status(400).json({ message: 'Missing booking fields' });
    }

    const booking = new Booking({
      bookingDate,
      members,
      location,
      name,
      userId: req.user.id
    });

    await booking.save();
    res.status(201).json({ message: 'Tour booked successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Booking failed', error: err.message });
  }
});



module.exports = router;
