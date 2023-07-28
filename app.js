// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// JSON data file path
const userDataFilePath = path.join(__dirname, 'data', 'users.json');

// Route to serve login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Read the JSON data file
  fs.readFile(userDataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading user data:', err);
      res.status(500).json({ message: 'Error reading user data' });
      return;
    }

    const users = JSON.parse(data);
    const user = users.find((user) => user.email_id === email && user.password === password);

    if (user) {
      res.cookie('user_email', email,{ path: '/' });
      res.redirect('/home'); // Redirect to the home page after successful login
    } else {
      res.redirect('/'); // Redirect back to login page if login fails
    }
  });
});

// Home page
app.get('/home', (req, res) => {
  const userEmail = req.cookies.user_email;
  if (userEmail) {
    res.sendFile(path.join(__dirname, 'home.html'));
  } else {
    res.redirect('/');
  }
});


app.get('/logout', (req, res) => {
  res.clearCookie('user_email');
  res.redirect('/');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
