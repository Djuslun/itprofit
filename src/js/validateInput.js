const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const telephoneInput = document.querySelector('#telephone');
const messageInput = document.querySelector('#message');
export let emailValid, nameValid, telephoneValid, messageValid;
const emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
const namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/ // Имя не должно содержать цифр и пробелов
const telephonePattern = /^((8|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,14}$/i; // Отсеить все нецифровые значения номера, исключения сделать только для всяких скобо, дефисов, пробелов и т.д.

function validateInput(input, pattern) {
  return pattern.test(input.value);
}

function classChange(input, isValid) {
  if (isValid) {
    input.classList.remove('_unvalid');
    input.classList.add('_valid');
  } else {
    input.classList.add('_unvalid');
    input.classList.remove('_valid');
  }
}

export function removeValidClass() {
  emailInput.classList.remove('_valid');
  nameInput.classList.remove('_valid');
  emailValid = nameValid  = false;
}

emailInput.addEventListener('input', () => {
  emailValid = validateInput(emailInput, emailPattern);
  classChange(emailInput, emailValid);
})

nameInput.addEventListener('input', () => {
  nameValid = validateInput(nameInput, namePattern);
  classChange(nameInput, nameValid);
})

telephoneInput.addEventListener('input', () => {
  telephoneValid = validateInput(telephoneInput, telephonePattern);
  classChange(telephoneInput, telephoneValid);
})

messageInput.addEventListener('input', () => {
  messageValid = !!(messageInput.value.trim());
  classChange(messageInput, messageValid);
})