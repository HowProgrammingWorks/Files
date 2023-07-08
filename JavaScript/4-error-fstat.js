'use strict';

const fs = require('node:fs');

const filenames = ['1-readFileSync.js', 'n-untitled.js', '3-async.js'];
const stats = new Array(filenames.length);

let processedCount = 0;
for (const [index, filename] of filenames.entries()) {
  console.dir({ filename, index });
  fs.lstat(filename, (err, stat) => {
    if (err) {
      console.log(`File ${filename} not found`);
    } else {
      stats[index] = stat;
    }

    processedCount += 1;

    const isLastProcessed = processedCount === filenames.length;
    if (isLastProcessed) {
      console.dir({ stats });
    }
  });
}
