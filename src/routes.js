const express = require('express');
const routesMain = require('./routes/main');

const router = express.Router();

//Definição das rotas da API
router.use('/main', routesMain);

module.exports = router;
