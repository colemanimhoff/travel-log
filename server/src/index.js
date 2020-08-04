const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const middlewares = require('./middlewares');
const logs = require('./api/logs');

const app = express();
const port = process.env.PORT || 1337;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/logs', logs);

app.use(middlewares.notFoundErrorHandler);
app.use(middlewares.defaultErrorHandler);

app.listen(port, () => {
  console.log(`Listening on ${port}`); //eslint-disable-line
});
