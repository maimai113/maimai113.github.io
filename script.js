// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handling
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Validate inputs
  if (nameInput.value === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }
  
  if (emailInput.value === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }
  
  if (messageInput.value === '') {
    alert('Please enter a message.');
    messageInput.focus();
    return;
  }
  
  // Submit form data
  const formData = new FormData(form);
  
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
    alert('Message sent!');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  })
  .catch(error => {
    alert('An error occurred. Please try again later.');
    console.error(error);
  });
});
