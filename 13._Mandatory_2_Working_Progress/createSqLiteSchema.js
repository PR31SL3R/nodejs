import { createConnection } from './connectDB.js';

(async () => {
  const connection = await createConnection();

  await connection.exec('DROP TABLE IF EXISTS projects');
  await connection.exec('DROP TABLE IF EXISTS admins');

  const adminsTableScheme = `CREATE TABLE admins(
        admin_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT NOT NULL,
        password TEXT NOT NULL
        )`;

  const projectsTableSchema = `CREATE TABLE projects(
            project_id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            technologies TEXT NOT NULL,
            description TEXT,
            link TEXT NOT NULL)`;

  const password = process.env.DB_PASS;
  const user = process.env.DB_USER;

  const adminInfo = `INSERT INTO admins (user, password) VALUES ('${user}', '${password}')`;

  const projectInfo = `INSERT INTO projects (title, technologies, description, link) 
    VALUES 
    ('test1', 'NodeJS', 'test description 1', 'github link 1'),
    ('test2', 'NodeJS', 'test description 2', 'github link 2'),
    ('test3', 'NodeJS', 'test description 3', 'github link 3'),
    ('test4', 'NodeJS', 'test description 4', 'github link 4'),
    ('test5', 'NodeJS', 'test description 5', 'github link 5');
    `;

  await connection.exec(projectsTableSchema);
  await connection.exec(adminsTableScheme);
  await connection.run(adminInfo);
  await connection.run(projectInfo);
})();
