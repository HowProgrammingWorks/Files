'use strict';

const fs = require('node:fs');

const stats = (files, done) => {
  const result = {};
  for (const file of files) {
    const res = {};
    fs.lstat(file, (err, stat) => {
      result[file] = { err, stat };
      const count = Object.keys(result).length;
      if (count === files.length) done(result);
    });
  }
};

const files = ['1-readFileSync.js', 'n-untitled.js', '3-async.js'];
stats(files, console.dir);
