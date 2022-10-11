'use strict';

const fs = require('node:fs');

fs.watch('./6-watch.js', (event, file) => {
  console.dir({ event, file });
});
