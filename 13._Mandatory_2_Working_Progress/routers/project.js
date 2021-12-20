import express from 'express';
import { connection } from '../connectDB.js';

const router = express.Router();

router.get('/api/get', async (req, res) => {
  const projects = await connection.all('SELECT * FROM projects');
  res.send({ projects });
});

router.post('/api/post', async (req, res) => {
  const createProject = req.body;
  connection.run(
    `INSERT INTO projects ('title', 'technologies', 'description', 'link')
        VALUES (?, ?, ?, ?)`,
    [createProject.title,
      createProject.technologies, createProject.description,
      createProject.link],
  );
  return res.sendStatus(200);
});

router.delete('/api/delete', async (req, res) => {
  const { title } = req.body;
  const project = await connection.all(`SELECT * FROM projects where projects.title = "${title}"`);
  const actual = project.pop();
  connection.run(`DELETE FROM projects where project_id = ${actual.project_id}`);
  return res.sendStatus(200);
});

router.post('/api/update', async (req, res) => {
  const project = await connection.all(`SELECT * FROM projects where projects.title = "${req.body.title}"`);
  const actual = project.pop();
  connection.run(`UPDATE projects SET 
        title = '${req.body.title}',
        technologies = '${req.body.technologies}', description = '${req.body.description}',
        link = '${req.body.link}' WHERE project_id = ${actual.project_id}`);
  return res.sendStatus(200);
});

export default router;
