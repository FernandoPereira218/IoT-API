const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express()

const origin = {
  origin: process.env.CORS_ORIGIN
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());
app.use(compression())
app.use(helmet())

const router = require('./src/routes')
app.use('/api', router)

app.listen(process.env.PORT || 5000, () => {
  console.log(`⚡️[server]: Server is running at ${process.env.PORT}`)
});

module.exports = app
