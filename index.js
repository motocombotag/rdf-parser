require('dotenv').config();

const path = require('path');
const fs = require('fs');
const recursive = require("recursive-readdir");
const { parseString } = require('xml2js');

const { parseRdf } = require('./utils');
const { saveMeta } = require('./controllers/meta');

function main() {
  const directoryPath = path.join(__dirname, 'cache');
  recursive(directoryPath, ["*.html"], function (err, files) {
    files.map(filename => {
      fs.readFile(filename, 'utf8', function read(err, data) {
        parseString(data, async function (err, result) {
          const meta = parseRdf(result);
          await saveMeta(meta);
        });
      })
    });
  });
}

main();
