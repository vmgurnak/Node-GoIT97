import express from 'express';

const app = express();

app.get('/', (req, res) => {
  // console.log(req);
  res.send('Hello, Express:-)');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact page</h1>');
});

app.get('/contact/:id/', (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
