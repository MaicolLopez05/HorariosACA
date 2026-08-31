// App.js - Main server file for Node.js  the API

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const teacherRoutes = require('./routes/teacher.routes');

// Define base route for teachers module
app.use('/api/teachers', teacherRoutes);

// Server startup
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});