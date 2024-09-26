require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/config.js');
const userRoutes = require('./routes/userRoute.js');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server Running At Port: ', process.env.PORT);
  });
  
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
