'use strict';

const fs = require('fs');

const watch = (path) => {
  const watcher = fs.watch(path, (event, file) => {
    console.dir({ event, file });
  });
};

watch('./');
