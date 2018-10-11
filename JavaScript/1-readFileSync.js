'use strict';

const fs = require('fs');

const buffer = fs.readFileSync('1-readFileSync.js');
console.log(`Buffer length: ${buffer.length}`);
console.log(buffer);

const data = fs.readFileSync('1-readFileSync.js', 'utf8');
console.log(`Data length: ${data.length}`);
console.log(data);
