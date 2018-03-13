'use strict';

const fs = require('fs');

fs.readFile('1-readFileSync.js', (err, buffer) => {
  if (err) console.log(err);
  console.log('File size: ' + buffer.length);
  const src = buffer.toString();
  const lines = src.split('\n').filter(line => !!line);
  const content = lines.join('\n');
  fs.writeFile('1-readFileSync.txt', content, (err) => {
    if (err) console.log(err);
    console.log('New file size: ' + content.length);
  });
});

console.log('Read file async example');
