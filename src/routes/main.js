const express = require('express');
const controller = require('../controllers/main');

const mainRouter = express.Router();

//Definição das rotas da API
mainRouter.get('/', controller.index);
mainRouter.get('/teste', controller.testeApi);

module.exports = mainRouter;