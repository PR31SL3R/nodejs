const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/frontpage/frontpage.html`);
});

const PORT = process.env.PORT || 8080;

// eslint-disable-next-line no-unused-vars
app.listen(PORT, (_error) => {
  // eslint-disable-next-line no-console
  console.log('server is running on port', PORT);
});
