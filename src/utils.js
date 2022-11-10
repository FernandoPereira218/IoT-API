const fs = require('fs');

//Método de registro de erro em um arquivo de texto
const logErro = (mensagem) => {
  var dataAtual = new Date();
  var strData = dataAtual.getFullYear() + '-' + dataAtual.getMonth() + '-' + dataAtual.getDate();
  var msg = `[${dataAtual.toLocaleDateString() + ' ' + dataAtual.toLocaleTimeString()}] - ` +  mensagem + '\n';
  
  if (fs.existsSync(`./src/logs/${strData}.txt`)) {
    fs.appendFileSync(`./src/logs/${strData}.txt`, msg + "\n", (err) => {
      if (err) throw err;
    });
  }
  else {
    fs.writeFile(`./src/logs/${strData}.txt`, msg + '\n', (err) => {
      if (err) throw err;
    });
  }
}

//Adiciona horas para uma data
function addHours(numOfHours, date = new Date()) {
    const dateCopy = new Date(date.getTime());
  
    dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);
  
    return dateCopy;
}

module.exports = { logErro, addHours }
