const express = require('express');
const winston = require('winston');
const db = require('./config/db')
const app = express();
const cors = require('cors');
db();

app.use(express.json());
app.use(cors());
app.use('/api/url', require('./routes/url'));
app.use('/', require('./routes/redirect'));

require('./config/logging')();
const  PORT = 3000;
const server = app.listen(PORT, ()=> winston.info(`Listening on port ${PORT}`), 
console.log(`Listening on port ${PORT}`));

module.exports = server;