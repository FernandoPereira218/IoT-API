var admin = require("firebase-admin");

var serviceAccount = require("../../projeto-iot-b1952-firebase-adminsdk-oquvp-8374a5d1db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };