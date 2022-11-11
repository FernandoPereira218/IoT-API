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
      console.log(data);
      return res.status(201).send(data);
    });
  } catch (e) {
    return res.send(e);
  }
};

const logData = async (req, res, next) => {
    
}

const testeApi = async (req, res, next) => {
  return res.send("Tudo funcionando");
};

//Export dos métodos
module.exports = { index, testeApi };
