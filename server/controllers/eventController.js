const path = require('path');
const fs = require('fs');

const eventsFilePath = path.join(__dirname, '../data/events.json');

const getEvents = (req, res) => {
  fs.readFile(eventsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading events.json:", err);
      return res.status(500).json({ error: 'Server error' });
    }
    const events = JSON.parse(data);
    res.status(200).json(events);
  });
};

module.exports = { getEvents };
