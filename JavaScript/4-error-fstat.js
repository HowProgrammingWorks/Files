'use strict';

const fs = require('fs');

const files = ['1-readFileSync.js', 'n-untitled.js', '3-async.js'];

const stats = new Array(files.length);

const maxIndex = files.length - 1;

files.forEach((file, i) => {
  console.dir({ file, i });
  fs.lstat(file, (err, stat) => {
    if (err) {
      console.log(`File ${file} not found`);
    } else {
      stats[i] = stat;
    }
    if (i === maxIndex) printResult();
  });
});

function printResult() {
  console.dir({ stats });
}
