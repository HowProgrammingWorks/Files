'use strict';

const fs = require('node:fs');

const data = fs.readFileSync('1-readFileSync.js', 'utf8');
const lines = data.split('\n').filter((line) => !!line);
fs.writeFileSync('1-readFileSync.txt', lines.join('\n'));
