const mongoose = require('mongoose');

const MONG_URI = 'mongodb://127.0.0.1:27017/BookModel';
mongoose.connect(MONG_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected!'))
  .catch(err => console.log('Database connection error:', err));


