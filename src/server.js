const express = require('express');

const PORT = 8080;

const app = express();

app.get('/ping', (req, res) => res.json({ ping: 'kong' }));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server started on port ${PORT}`);
})