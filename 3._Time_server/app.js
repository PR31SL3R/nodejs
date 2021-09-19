const express = require('express'); // imports and saves variable

const app = express(); // instantiates server
// json body
app.use(express.json());

const weekday = [];
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednsday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

const month = [];
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';

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
  const date = new Date();
  const currentWeekday = weekday[date.getUTCDay()];
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
