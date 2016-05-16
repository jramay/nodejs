'use strict';

const express = require('express');
const winston = require('winston');
winston.add(winston.transports.File, { filename: 'server.log' });

// Constants
const PORT = 8081;
var requestNumber = 0;
// App
const app = express();
app.get('/', function (request, response) {
 requestNumber++;
 winston.info('Got Request('+requestNumber+') on server ('+request.headers.host+')');
  response.send('Work in Progress for Docker Cluster in AWS by Muhammad Jaffar Ramay\nRequest('+requestNumber+')');
});

app.listen(PORT);
winston.info('Running on http://localhost:' + PORT);