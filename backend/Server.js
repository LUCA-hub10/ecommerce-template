const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, MONGO_URI } = require('./config/config');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/product'));

// DB connect + server start
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${5000}`)))
  .catch(err => console.log(err));
