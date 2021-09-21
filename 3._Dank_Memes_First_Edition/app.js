const express = require('express');

const app = express();

// Mock database
const dankestOfMemes = [
  {
    id: 1, name: 'Meme1', url: 'https://preview.redd.it/yx0lur8puvn51.gif?format=mp4&s=0c4543db4183f8f2e057a7d296923c1e9b9ccb1b', tag: 'Dank',
  },
  {
    id: 2, name: 'Meme2', url: 'https://www.reddit.com/r/dankmemes/comments/k9uurc/noted/', tag: 'Dank',
  },
  {
    id: 3, name: 'Meme3', url: 'https://www.reddit.com/r/dankmemes/comments/k3tiqd/50_holy_damage/', tag: 'Dank',
  },
  {
    id: 4, name: 'Meme4', url: 'https://www.reddit.com/r/dankmemes/comments/k986ci/damn_you_bill_gates/', tag: 'Dank',
  },
  {
    id: 5, name: 'Meme5', url: 'https://external-preview.redd.it/R30cgIMHNax6_hqe3fLy2RCVfo0CND6BipVzctmfDbQ.gif?format=mp4&s=1cce52dcbaa126bfc213243422e52112227457fd', tag: 'Dank',
  },
  {
    id: 6, name: 'Meme6', url: 'https://preview.redd.it/tskozj33tbp51.gif?width=640&format=mp4&s=343a3400b2751bbedaecc92f33e7136ee7f4b3ca', tag: 'Dank',
  },
  {
    id: 7, name: 'Meme7', url: 'https://www.reddit.com/r/dankmemes/comments/jlgf8p/just_give_me_a_chance/', tag: 'Dank',
  },
  {
    id: 8, name: 'Meme8', url: 'https://www.reddit.com/r/dankmemes/comments/kwqus8/peach_is_a_hoe/', tag: 'Dank',
  },
  {
    id: 9, name: 'Meme9', url: 'https://www.reddit.com/r/dankmemes/comments/jx88m5/sigh/', tag: 'Dank',
  },
  {
    id: 10, name: 'Meme10', url: 'https://www.reddit.com/r/dankmemes/comments/kjbdbb/why_must_you_hurt_me_in_this_way/', tag: 'Dank',
  }];

app.get('/dankmemes', (req, res) => {
  res.send({ dankestOfMemes });
});

app.get('/dankmemes/:id', (req, res) => {
  const memeId = Number(req.params.id);
  const retrievedMeme = dankestOfMemes.find((meme) => meme.id === memeId);

  res.send({ retrievedMeme });
});

app.listen(8080);
