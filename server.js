const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const server = express();

server.use(history());

server.use(express.static(path.join(__dirname, '/dist')));

server.listen(process.env.PORT || 3000);
