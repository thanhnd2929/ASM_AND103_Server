// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productsRoute');

const app = express();
const port = 3000;

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/ASM_AND103', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

// Bắt đầu server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
