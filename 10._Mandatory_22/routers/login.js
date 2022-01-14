import express from 'express';
import session from 'express-session';
import rateLimit from 'express-rate-limit';
import bcrypt from 'bcrypt';
import { createPage } from '../render.js';
import { connection } from '../connectDB.js';

const router = express.Router();

const loginpage = createPage('./public/pages/login/login.html', { title: 'this is the loginpage' });
const dashboard = createPage('./public/pages/dashboard/dashboard.html', { title: 'this is the dashboard' });

router.use(session({
  secret: 'signing cookies',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
router.use(rateLimiter);

const authRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 6,
});

router.use(rateLimiter);

async function isAuthorized(req, res, next) {
  let userIsAuthorized = false;
  const compareUserFromDB = await connection.get(`SELECT * FROM admins where user = '${req.body.user}'`);
  const { session } = req;
  userIsAuthorized = await bcrypt.compare(req.body.pass, compareUserFromDB.password);

  if (!userIsAuthorized) {
    return res.status(403).send({ message: 'You are not authorized' });
  }
  session.user = compareUserFromDB.user;
  next();
}

router.post('/auth/login', isAuthorized, authRateLimiter, (req, res) => {
  res.sendStatus(200);
});

router.get('/dashboard', (req, res) => {
  if (req.session.user) {
    return res.send(dashboard);
  }
  return res.redirect('/login');
});

router.get('/login', (req, res) => {
  res.send(loginpage);
});

router.get('*', (req, res) => {
  res.status(404).send('<h1><a href="/">404</a></h1>');
});

export default router;
