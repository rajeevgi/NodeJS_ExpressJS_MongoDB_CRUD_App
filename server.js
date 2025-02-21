require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT;

// Establishing a connections with mongodb
const mongoUrl = process.env.MONGO_URL;   // url of mongodb server


// Middleware
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

mongoose.connect(mongoUrl)
.then(() => console.log("MongoDB connected Successfully..."))
.catch(() => console.error("MongoDB connection error!", err));

app.listen(port, (req, res) => {
    console.log(`Server is running on port http://localhost:${port}`);
})
