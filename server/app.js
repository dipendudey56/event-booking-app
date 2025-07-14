const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./routes/booking');
const eventRoutes = require('./routes/event'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/bookings', bookingRoutes);
app.use('/events', eventRoutes); 

app.get('/', (req, res) => {
  res.send('Backend Server is Running');
});

module.exports = app;
