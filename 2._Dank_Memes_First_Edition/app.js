const express = require('express');

const app = express();

// Mock database
const dankestOfMemes = [
  {
    id: 1, name: 'Meme1', url: 'location', tag: 'Dank',
  },
  {
    id: 2, name: 'Meme2', url: 'location', tag: 'Dank',
  },
  {
    id: 3, name: 'Meme3', url: 'location', tag: 'Dank',
  },
  {
    id: 4, name: 'Meme4', url: 'location', tag: 'Dank',
  },
  {
    id: 5, name: 'Meme5', url: 'location', tag: 'Dank',
  },
  {
    id: 6, name: 'Meme6', url: 'location', tag: 'Dank',
  },
  {
    id: 7, name: 'Meme7', url: 'location', tag: 'Dank',
  },
  {
    id: 8, name: 'Meme8', url: 'location', tag: 'Dank',
  },
  {
    id: 9, name: 'Meme9', url: 'location', tag: 'Dank',
  },
  {
    id: 10, name: 'Meme10', url: 'location', tag: 'Dank',
  }];

app.get('/dankmemes', (req, res) => {
  res.send({ dankestOfMemes });
});
