const express = require('express');
const winston = require('winston');
const db = require('./config/db')
const app = express();

db();
app.use(express.json());
require('./config/logging')();
const  PORT = 3000;
app.listen(PORT, ()=> winston.info(`Listening on port ${PORT}`), console.log(`Listening on port ${PORT}`));