'use strict';

const fs = require('fs');

const main = async () => {
  const stream = fs.createReadStream('./8-promises.js', 'utf8');
  for await (const chunk of stream) {
    console.log(chunk);
  }

  const data = await fs.promises.readFile('./8-promises.js', 'utf8');
  console.log(data);
};

main().catch(console.error);
