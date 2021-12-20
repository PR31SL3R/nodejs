const express = require('express');

const app = express();

// path module løser forbidden problemet path.join
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const frontpagePage = ('./public/pages/frontpage/frontpage.html');
// const cvPagePage = createPage('./public/pages/cv/cv.html', { title: 'CV' });
// const contactPage = createPage('./public/pages/contacts/contact.html', { title: 'contact' });
// const projectsPage = createPage('./public/pages/projects/projects.html', { title: 'projects' });

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/frontpage/frontpage.html`);
});

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/auth/login.html`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  console.log('Server is running on', PORT);
});
