const express = require('express');

const api = require('./controllers/api');
const {imageToDisk} = require('./utils/imageToDisk');


const apiRouter = new express.Router();


apiRouter.post('/upload', imageToDisk, api.uploadImage);


apiRouter.get('/list', api.getImages);
// apiRouter.get('/image/:id', api.getImage);
apiRouter.delete('/image/:id', api.deleteImage);
// apiRouter.get('/merge');

exports.apiRouter = apiRouter;