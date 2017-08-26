'use strict';

const fs = require('fs');

const buffer = fs.readFileSync('1-readFile.js');
const src = buffer.toString();
const lines = src.split('\n').filter(line => !!line);
fs.writeFileSync('1-readFile.txt', lines.join('\n'));
