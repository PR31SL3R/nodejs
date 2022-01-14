import * as fs from 'fs';

const nav = fs.readFileSync('./public/components/nav/nav.html', 'utf8');
const footer = fs.readFileSync('./public/components/footer/footer.html', 'utf8');

function createPage(path, options = { title: 'PortFolio' }) {
  const page = fs.readFileSync(`${path}`, 'utf8');
  return (nav + page + footer).replace('%%DOCUMENT_TITLE%%', options?.title || 'Portfolio');
}

export { createPage };
