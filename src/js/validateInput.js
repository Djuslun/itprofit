const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const telephoneInput = document.querySelector('#telephone');
const messageInput = document.querySelector('#message');
const emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
const namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/ // Имя не должно содержать цифр и пробелов
const telephonePattern = /^((8|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,14}$/i; // Отсеить все нецифровые значения номера, исключения сделать только для всяких скобо, дефисов, пробелов и т.д.

export const inputs = [
  { input: emailInput, pattern: emailPattern, isValide: false },
  { input: nameInput, pattern: namePattern, isValide: false },
  { input: telephoneInput, pattern: telephonePattern, isValide: false },
  { input: messageInput, pattern: null, isValide: false },
]

function validateInput(input, pattern, index) {
  inputs[index].isValide = (input === messageInput)
    ? !!input.value.trim()
    : pattern.test(input.value)
  classChange(input, inputs[index].isValide)
}

export function submitValidate() {
  inputs.forEach(({ input, pattern }, i) => {
    validateInput(input, pattern, i)
  })
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
  inputs.forEach(({ input }) => {
    input.classList.remove('_valid')
  })
}

inputs.forEach(({ input, pattern }, i) => {
  input.addEventListener('input', () => {
    validateInput(input, pattern, i)
  })
})