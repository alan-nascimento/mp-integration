const fs = require('fs');
const cors = require('cors');
const express = require('express');

const server = express();

server.use(cors());

server.get('/', (req, res) => {
  fs.readFile(__dirname + '/index.html', 'utf8', (err, file) => {

    res.send(file);
  });
});

server.listen(8000);
