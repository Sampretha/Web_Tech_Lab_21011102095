// index.js
const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World! This is the home route.<a href="/about">about</a> <a href="/contact">contact</a>')
});

app.get('/about', (req, res) => {
    res.send('This is the about route.');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact route.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
