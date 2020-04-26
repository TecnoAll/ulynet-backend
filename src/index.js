require('dotenv').config();
const express = require('express');
const agradon = require('agradon');

const app = express();

app.use(require('cors')());

agradon.init({
  app,
  rootPath: '/api',
  auth: {
    strategies: require('./strategies')
  }
});

app.use('**', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));

module.exports = app;
