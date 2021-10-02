const express = require('express');
const http = require('http');
const { apiRouter } = require('./routers');

const PORT = 8080;

const app = express();

app.use('/', apiRouter);

const server = http.createServer(app);

server.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server started on port ${PORT}`);
})