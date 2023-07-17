'use strict';

const fs = require('node:fs').promises;

const fileNames = ['1-readFileSync.js', 'n-untitled.js', '3-async.js'];
const promises = fileNames.map((fileName) => fs.lstat(fileName));
Promise.allSettled(promises).then(console.dir);
