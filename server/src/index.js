const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const morgan = require('morgan');

const middlewares = require('./middlewares');

const app = express();
const port = process.env.PORT || 1337;

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(helmet());
app.use(morgan('common'));

app.get('/', (_, res) => {
  res.status(200);
  res.json({
    message: 'fuckkkkk',
  });
});

app.use(middlewares.notFoundErrorHandler);
app.use(middlewares.defaultErrorHandler);

app.listen(port, () => {
  console.log(`Listening on ${port}`); //eslint-disable-line
});
