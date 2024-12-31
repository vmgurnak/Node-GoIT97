const movies = require('./movies/index.js');

movies
  .readMovies()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
