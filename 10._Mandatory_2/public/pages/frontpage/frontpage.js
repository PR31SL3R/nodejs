toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

$(document).ready(() => {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const { hash } = this;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900)
      // specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 900, () => {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
function myFunction(params) {
  toastr.info('Sending message...');
  fetch('api/contact', {
    method: 'post',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    }),
  }).then((response) => {
    if (response.status === 200) {
      toastr.success('Message sent');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    } else {
      toastr.error('Message failed');
      console.log('error', response.status);
    }
  });
}

fetch('/api/get')
  .then((response) => response.json())
  .then(({ projects }) => {
    const projectsWrapperDiv = document.getElementById('projects-wrapper');

    projects.map((project) => {
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = `
            <h3>${(project.title)}</h3>
            <p>Description: ${(project.description)}</p>
            <p>Technologies: ${(project.technologies)}</p>
            <p>Link: ${(project.link)}</p>
        `;

      projectsWrapperDiv.appendChild(projectDiv);
    });
  });

document.getElementById('msgSubmit').addEventListener('click', myFunction);
