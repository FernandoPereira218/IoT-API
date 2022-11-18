const api = require("../api");
const { logErro } = require("../utils");
const { db } = require("../firebase/admin");

const index = async (req, res, next) => {
  const collection = db.collection("logs");
  try {
    collection.get().then((response) => {
      const data = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //console.log(new Date(data[0].DataHora._seconds * 1000).toLocaleString());
      const weekDays = Array(7).fill(0);
      const formattedData = data.map((x) => {
        var date = new Date(x.DataHora._seconds * 1000);
        var weekDay = date.getDay();
        weekDays[weekDay] += 1;
        return {
            id: x.id,
            date: date.toLocaleString()
        };
      })
      return res.status(201).send({
        data: formattedData,
        amountPerWeekDay: weekDays
      });
    });
  } catch (e) {
    return res.send(e);
  }
};

const logData = async (req, res, next) => {
    const data = {
        DataHora: new Date()
    }

    const response = await db.collection('logs').doc().set(data);

    return res.send('Enviado com sucesso');
}

const testeApi = async (req, res, next) => {
  return res.send("Tudo funcionando");
};

//Export dos métodos
module.exports = { index, testeApi, logData };
