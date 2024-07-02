const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Connect to the database
connectDb();
app.use('/api/user', userRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
