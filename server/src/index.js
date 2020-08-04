const express = require('express');

const port = process.env.PORT || 1337;

const app = express();
app.listen(port, () => {
  console.log(`Listening on ${port}`); //eslint-disable-line
});
