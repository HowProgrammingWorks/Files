'use strict';

const fs = require('node:fs');

const output = (err, files) => {
  if (err) console.log(err);
  else console.dir(files);
};

fs.readdir('.', output);
fs.readdir('..', output);
fs.readdir('./lib', output);
