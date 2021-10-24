const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index/index.html`);
});
const port = process.env.PORT || 8080;

app.listen(port, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  // eslint-disable-next-line no-console
  console.log('Server is running on port', Number(port));
});
