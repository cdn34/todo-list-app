const express = require('express');
const app = express();
const http = require('http');
const compression = require('compression');
const bodyParser = require('body-parser');
const mongoose = require('./database/mongoose');
const path = require('path');
const port = 80;

app.use(bodyParser.json({limit: '10mb'}));//limit to 10mb for body request
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../client/')));
app.use(compression());


mongoose.mongooseConnect();

//Configure routes
const main = require('./routes/main');
app.use('/', main);

http.createServer(app).listen(port);
console.log('Server running on port: ' + port);