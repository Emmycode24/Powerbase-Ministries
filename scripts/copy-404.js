const fs = require('fs');
const path = require('path');

const buildIndex = path.join(__dirname, '..', 'build', 'index.html');
const build404 = path.join(__dirname, '..', 'build', '404.html');

fs.copyFileSync(buildIndex, build404);
