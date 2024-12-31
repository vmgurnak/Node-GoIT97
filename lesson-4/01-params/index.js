import express from 'express';

const app = express();

// app.get("/books/1", (req, res) => {
//   res.send("Book 1");
// });

// app.get("/books/2", (req, res) => {
//   res.send("Book 2");
// });

// app.get("/books/3", (req, res) => {
//   res.send("Book 3");
// });

app.get('/books/:bookId/comments/:commentId', (req, res) => {
  console.log(req.params);
  const { bookId, commentId } = req.params;

  res.send(`Book ${bookId}, Comment ${commentId}`);
});

app.listen(8080, () => {
  console.log('Server stated on port 8080');
});
