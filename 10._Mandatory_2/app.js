import express from 'express';
import dotenv from 'dotenv';

// Routes
import contactRoute from './routers/contact.js';
import projectsRoute from './routers/project.js';
import loginRoute from './routers/login.js';

// Render
import { createPage } from './render.js';

const app = express();
dotenv.config();

// path Module
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ready Pages
const frontpagePage = createPage('./public/pages/frontpage/frontpage.html', { title: 'this is the frontpage' });

app.get('/', (req, res) => {
  res.send(frontpagePage);
});

app.use(contactRoute);
app.use(projectsRoute);
app.use(loginRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  console.log('Server is running on', PORT);
});
