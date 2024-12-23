require('./MongoDBConnect'); // Ensure this path is correct

const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const Books = require('./BooksSchema');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Logging the Books model
console.log("BOOKS", Books);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the MongoDB Express React and Mongoose App');
});

app.get('/about', (req, res) => {
  res.send("MongoDB, Express, React, and Mongoose app. React runs in another application.");

  Books.countDocuments().exec()
    .then(count => {
      console.log("Total documents Count before addition:", count);
    })
    .catch(err => {
      console.error(err);
    });
});

app.get('/allbooks1', async (req, res) => {
  const books = await Books.find();
  return res.json(books);
});

app.get('/getbook/:id', (req, res) => {
  let id = req.params.id;
  Books.findById(id, (err, book) => {
    if (err) return res.status(500).send(err);
    return res.json(book);
  });
});

app.post('/addbooks', (req, res) => {
  console.log("Ref", req.body);
  let newBook = new Books(req.body);
  console.log("newBook->", newBook);

  newBook.save()
    .then(() => {
      res.status(200).json({ 'books': 'book added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new book failed');
    });
});

app.post('/updatebook/:id', (req, res) => {
  let id = req.params.id;
  let updatedBook = req.body;
  console.log("update id", id, "updatedBook>", updatedBook);

  Books.findByIdAndUpdate(id, updatedBook, { new: true }, (err, doc) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ 'books': 'book updated successfully' });
  });
});

app.post('/deleteBook/:id', (req, res) => {
  let id = req.params.id;
  console.log("deleting");

  Books.findByIdAndDelete(id, (err, docs) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Book Deleted');
  });
});

// Server listening
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
