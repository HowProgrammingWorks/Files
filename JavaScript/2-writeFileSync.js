'use strict';

const fs = require('fs');
const { EOL } = require('os');

const data = fs.readFileSync('1-readFileSync.js', 'utf8');
const lines = data.split(EOL).filter(line => !!line);
fs.writeFileSync('1-readFileSync.txt', lines.join(EOL));
