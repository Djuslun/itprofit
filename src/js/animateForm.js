const forms = document.querySelectorAll('.form__input-item');
const submitButton = document.querySelector('.form__button');

forms.forEach((item, i) => {
  setTimeout(() => {
    item.classList.remove('_hidden')
  }, i * 500);
})

export function submitButtonError() {
  submitButton.classList.add('error');
  submitButton.addEventListener('animationend', () => {
    submitButton.classList.remove('error');
  })
}