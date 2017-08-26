'use strict';

const fs = require('fs');

const files = ['1-readFile.js', 'n-untitled.js', '3-readFile.js'];

const stats = new Array(files.length);

files.forEach((file, i) => {
  console.dir({ file, i });
  fs.lstat(file, (err, stat) => {
    if (err) {
      console.log(`File ${file} not found`);
      return;
    }
    stats[i] = stat;
    if (i === 2) printResult();
  });
});

function printResult() {
  console.dir({ stats });
}
