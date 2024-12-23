const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  Booktitle: {
    type: String,
    required: true
  },
  PubYear: Number,
  Author: String,
  Topic: String,
  Format: String  
});

module.exports = mongoose.model('BookModel', BookSchema, 'BookCollection2');
