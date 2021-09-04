const emailAddress = document.getElementById('user_email');
const fullName = document.getElementById('user_name');
const textMessage = document.getElementById('user_message');
const templateForm = document.getElementById('form');
const validatorMessage = document.getElementById('validator-message');
templateForm.addEventListener('input', () => {
    const localStorageObject = {
      name: fullName.value,
      email: emailAddress.value,
      message: textMessage.value,
    };
    localStorage.setItem('templateFormData', JSON.stringify(localStorageObject));
  });
  
  const getData = JSON.parse(localStorage.getItem('templateFormData'));
function prePopulated() {
  if (getData) {
    fullName.value = getData.name;
    emailAddress.value = getData.email;
    textMessage.value = getData.message;
    return getData;
  }
  return '';
}
prePopulated();