'use strict';

const fs = require('fs');

const buffer = fs.readFileSync('1-readFileSync.js');
const src = buffer.toString();
const lines = src.split('\n').filter(line => !!line);
fs.writeFileSync('1-readFileSync.txt', lines.join('\n'));
