const fs = require('fs');
const path = require('path');

const eventsFilePath = path.join(__dirname, '../data/events.json');

const createBooking = (req, res) => {
  const { name, email, title, date } = req.body;

  const newEvent = { id: Date.now(), title, date };

  console.log("New Booking Received:", req.body);

  fs.readFile(eventsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading events file:", err);
      return res.status(500).json({ error: 'Server error' });
    }

    let events = JSON.parse(data);
    events.push(newEvent);

    fs.writeFile(eventsFilePath, JSON.stringify(events, null, 2), (err) => {
      if (err) {
        console.error("Error writing events file:", err);
        return res.status(500).json({ error: 'Server error' });
      }

      res.status(201).json({ message: 'Booking submitted successfully' });
    });
  });
};

module.exports = { createBooking };
