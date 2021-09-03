const emailAddress = document.getElementById('mail');
const templateForm = document.getElementById('form');
const validatorMessage = document.getElementById('validator-message');
templateForm.addEventListener('submit', (e) => {
    if (emailAddress.value !== emailAddress.value.toLowerCase()) {
      e.preventDefault();
      validatorMessage.textContent = 'Kindly input email in lowercase!';
    } else {
      validatorMessage.textContent = '';
    }
  });