const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 5000;

// Read and parse the JSON data
let eventData = fs.readFileSync('data/events.json');
let jsonData = JSON.parse(eventData);

// Serve static files from the "public" directory
app.use('/public', express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Render the events page with the JSON data
app.get('/', function(req, res) {
    res.render('pages/events', {
        events: jsonData.events
    });
});

// Render the register page
app.get('/register', function(req, res) {
    res.render('pages/register');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});