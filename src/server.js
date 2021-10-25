const fs = require('fs');
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  fs.readFile(__dirname + '/index.html', 'utf8', (err, text) => {
    res.send(text);
  });
});

server.listen(8000);
