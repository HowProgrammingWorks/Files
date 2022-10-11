'use strict';

const fs = require('node:fs');

const data = fs.readFileSync('1-readFileSync.js', 'utf8');
console.log(`Data length: ${data.length}`);
console.log(data);
