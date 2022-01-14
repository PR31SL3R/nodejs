function addProject() {
  fetch('/api/post', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      title: document.getElementById('projectTitle').value,
      technologies: document.getElementById('technologies').value,
      description: document.getElementById('projectDescription').value,
      link: document.getElementById('projectLink').value,
    }),
  }).then((response) => {
    if (response.status === 200) {
      console.log('Everything went well');
    } else {
      console.log('Error sending the contact message', response.status);
    }
  });
}

function editProject() {
  fetch('/api/update', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      title: document.getElementById('projectTitle').value,
      technologies: document.getElementById('technologies').value,
      description: document.getElementById('projectDescription').value,
      link: document.getElementById('projectLink').value,
    }),
  }).then((response) => {
    if (response.status === 200) {
      console.log('Everything went well');
    } else {
      console.log('Error sending the contact message', response.status);
    }
  });
}

function deleteProject() {
  fetch('/api/delete', {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      title: document.getElementById('projectTitle').value,
    }),
  }).then((response) => {
    if (response.status === 200) {
      console.log('Everything went well');
    } else {
      console.log('Error sending the contact message', response.status);
    }
  });
}

function cancelProject() {
  document.getElementById('projectTitle').value = '';
  document.getElementById('technologies').value = '';
  document.getElementById('projectDescription').value = '';
  document.getElementById('projectLink').value = '';
}

document.getElementById('btnAddProject').addEventListener('click', addProject);
document.getElementById('btnCancelProject').addEventListener('click', cancelProject);
document.getElementById('btnEditProject').addEventListener('click', editProject);
document.getElementById('btnDeleteProject').addEventListener('click', deleteProject);
