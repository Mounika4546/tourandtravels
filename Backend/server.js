const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const authRoutes = require('./Routers/authRoutes');  // Includes login, register, booking
const emailRoute = require("./Routers/api");         // contact form/email

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:2170",
  "http://192.168.136.237:2170"
];

// ✅ CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true
};

// ✅ Use middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ API Routes
app.use('/api/auth', authRoutes);        // Register, login, bookings
app.use('/api/form', emailRoute);        // Contact form/email

// ✅ Root route
app.get('/', (req, res) => {
  res.send('🌍 Welcome to the Tours and Travels API!');
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.message);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
