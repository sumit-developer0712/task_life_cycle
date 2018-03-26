const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send({
        messgae: "Server started and running"
    });
});

const server = http.createServer(app).listen(port);

module.exports = server;