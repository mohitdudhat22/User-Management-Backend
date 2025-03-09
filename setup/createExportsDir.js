const fs = require('fs');
const path = require('path');

const exportsDir = path.join(__dirname, '../exports');

if (!fs.existsSync(exportsDir)) {
  fs.mkdirSync(exportsDir);
} 