/* eslint-disable no-console */
const express = require('express'); // imports and saves variable libary

const app = express(); // instantiates server
// json body
app.use(express.json());

// moment js tider god side til side ting

// nodemon er devolpment specific buildtool
// const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/', (req, res) => {
  res.send({});
});

app.get('/time', (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = (`${hour}:${minutes}:${seconds}`);
  res.send({ time });
});

app.get('/day', (req, res) => {
  // const date = new Date();
  // const currentWeekday = weekday[date.getUTCDay()];
  const currentWeekday = new Date().toLocaleDateString('da-DK', { weekday: 'long' });
  // return res.send({ day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date) });
  res.send({ currentWeekday });
});

app.get('/month', (req, res) => {
  const date = new Date();
  const currentMonth = month[date.getMonth()];
  res.send({ currentMonth });
});
// keep on bottom - starts the server
app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('server is running on port', 8080);
});
