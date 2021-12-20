function sendContactMessage() {
  fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      user: document.getElementById('user').value,
      pass: document.getElementById('pass').value,
    }),
  }).then((response) => {
    if (response.status === 200) {
      console.log('Everything went well');
      window.location.replace('/dashboard');
    } else {
      console.log('Error sending the contact message', response.status);
    }
  });
}

document.getElementById('login-button').addEventListener('click', sendContactMessage);
