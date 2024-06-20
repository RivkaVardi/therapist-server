const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const therapistRoutes = require('./routes/therapistRoutes');
const timeRoutes = require('./routes/timeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbURI = 'mongodb://localhost:27017/therapy';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/users', userRoutes);
app.use('/therapists', therapistRoutes);
app.use('/times', timeRoutes);
console.log("router");


module.exports = app;
