const express = require('express');
const cors=require('cors');
const app = express();
const port = 4000; // This port number can be modified as per our choice

app.use(cors())

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express.js!!');
});

app.get('/backendApi/helloWorld', (req, res) => {
    res.send('Hello World!');
});


// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
