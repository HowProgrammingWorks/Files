'use strict';

const fs = require('node:fs');

class KeyCollector {
  constructor(keys, onDone) {
    this.expected = new Set(keys);
    this.onDone = onDone;
    this.finished = false;
    this.data = new Map();
  }

  collect(key, value) {
    if (this.finished) return this;
    this.data.set(key, value);
    if (this.expected.size === this.data.size) {
      this.finished = true;
      this.onDone(this.data);
    }
    return this;
  }
}

const files = ['1-readFileSync.js', 'n-untitled.js', '3-async.js'];

const stats = new KeyCollector(files, console.dir);

for (const fileName of files) {
  fs.lstat(fileName, (err, stat) => {
    stats.collect(fileName, err || stat);
  });
}
