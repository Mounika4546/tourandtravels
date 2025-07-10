const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  bookingDate: Date,
  members: Number,
  location: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);  // ✅ This line is important!
