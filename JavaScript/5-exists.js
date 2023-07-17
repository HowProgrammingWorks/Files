'use strict';

const fs = require('node:fs');

(async () => {
  const fileName = '1-readFileSync.js';
  const toBool = [() => true, () => false];
  const exists = await fs.promises.access(fileName).then(...toBool);
  console.log({ exists });
})();
