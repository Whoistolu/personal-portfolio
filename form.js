const emailAddress = document.getElementById('mail');
const contactForm = document.getElementById('contact-details');
const validatorMessage = document.getElementById('message-validator');
contactForm.addEventListener('submit', (e) => {
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    e.preventDefault();
    validatorMessage.textContent = 'Kindly input email in lowercase';
  } else {
    validatorMessage.textContent = '';
  }
});