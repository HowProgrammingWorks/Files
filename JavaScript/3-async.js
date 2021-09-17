'use strict';

const fs = require('fs');
const { EOL } = require('os');

fs.readFile('1-readFileSync.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(`File size: ${data.length}`);
  const lines = data.split(EOL).filter(line => !!line);
  const content = lines.join(EOL);
  fs.writeFile('1-readFileSync.txt', content, err => {
    if (err) throw err;
    console.log(`New file size: ${content.length}`);
  });
});

console.log('Read file async example');
