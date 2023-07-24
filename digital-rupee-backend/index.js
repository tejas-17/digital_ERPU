const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // Import the mysql2 library
const app = express();
const port = 4000; 

// MySQL database configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'digital rupee', // Replace with your database name
    port: 3306,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database!');
    }
});


app.use(cors());
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express.js!!');
});

app.get('/backendApi/helloWorld', (req, res) => {
    res.send('Hello World!');
});

// Define the POST route for registration
app.post('/backendApi/register', (req, res) => {
    // Extract the registration data from the request body
    const { name, email, password, balance } = req.body;

    // Save the registration data to the database
    const sql = 'INSERT INTO users (name, email, password, balance) VALUES (?, ?, ?, ?)';
    const values = [name, email, password, balance];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error saving user registration data:', err);
            res.status(500).json({ message: 'Error registering user.' });
        } else {
            console.log('User registration data saved:', result);
            res.status(200).json({ message: 'Registration successful!' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
