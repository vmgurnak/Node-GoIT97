const fs = require('node:fs/promises');

fs.writeFile('writeFile.txt', 'I like Node.js')
  .then(() => console.log('Done!'))
  .catch((error) => console.error(error));
