const express = require('express');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(express.static('public')); // serve statiske klient filer

/* Beware that we can only do inline CSS and JS in the HTML files until next week */

app.get('/', (req, res) => {
  // this also works:
  // res.sendFile("index.html", { root: __dirname });
  res.sendFile(`${__dirname}/public/index/index.html`);
});

app.get('/cleo', (req, res) => {
  res.sendFile(`${__dirname}/public/cleo/cleo.html`);
});

app.get('/teenageroom', (req, res) => {
  res.sendFile(`${__dirname}/public/teenageroom/teenageroom.html`);
});

app.get('/sausage', (req, res) => {
  // 2 m¨der for at klienten kan sende querry string og path variables
  if (req.query.money < 25) {
    res.redirect('/creditor');
  }

  res.send({});
});

app.get('/creditor', (req, res) => {
  res.send({ message: 'you suck' });
});

/*
assignment: Create an endpoint called /proxy
and fetch the google homepage and send it to the client as response
Use this: https://www.npmjs.com/package/node-fetch
*/
app.get('/proxy', async (req, res) => {
  /*     fetch("https://www.google.com")
      .then(response => response.text())
      .then(result => res.send(result)); */
  const response = await fetch('https://www.google.com');
  const result = await response.text();
  res.send(result);
});

const port = process.env.PORT || 8080; // lazy evaluation (null og undefined er faulty)

const server = app.listen(port, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }// npm install --save-dev cross-env
  // eslint-disable-next-line no-console
  // console.log('Server is running on port', server.address().port);
  // eslint-disable-next-line no-console
  console.log('Server is running on port', port);
});
