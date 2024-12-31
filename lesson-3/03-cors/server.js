import * as fs from 'node:fs/promises';
import path from 'node:path';

import cors from 'cors';
import express from 'express';

const app = express();

// app.use(
//   cors({
//     origin: 'http://http://127.0.0.1:5500/',
//     optionsSuccessStatus: 200,
//   })
// );

app.use(cors());

app.get('/movies', async (req, res) => {
  const data = await fs.readFile(path.resolve('movies.txt'), {
    encoding: 'utf-8',
  });

  res.send(data);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
