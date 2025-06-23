document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formMessage = document.getElementById('formMessage');

  if (name && email.includes('@') && message) {
    formMessage.textContent = 'Message sent! (Simulated)';
    formMessage.style.color = 'green';
    this.reset();
  } else {
    formMessage.textContent = 'Please fill all fields correctly!';
    formMessage.style.color = 'red';
  }
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});