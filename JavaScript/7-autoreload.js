'use strict';

const fs = require('fs');

const load = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('\x1Bc');
    console.log(`Data length: ${data.length}`);
    console.log(data);
  });
};

const watch = path => {
  fs.watch(path, () => {
    load(path);
  });
};

const path = './1-readFileSync.js';
load(path);
watch(path);

// See: https://github.com/HowProgrammingWorks/FilesystemWatch
