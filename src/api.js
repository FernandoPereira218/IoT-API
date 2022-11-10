const axios = require('axios');
const fs = require('fs');
const { logErro } = require("./utils");

try {
    //Criação da instância da API já contendo os dados do certificado
    const api = axios.create({
        baseURL: ""
    });

    module.exports = api;
}
catch (e) {
    //Log de erro no arquivo de texto em /src/logs/dataErro.txt (data no formato yyyy-MM-dd)
    logErro(e);
    throw e;
}

