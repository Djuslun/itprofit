const messageWindow = document.querySelectorAll('.pop-up');
const messageWindowClose = document.querySelectorAll('.pop-up__close');
const showModalButton = document.querySelector('.form__button[type=button]');

export function showMessageWindow(status) {
  if (status) {
    messageWindow[0].classList.add('active');
  } else {
    messageWindow[1].classList.add('active');
  }
}

function hideMessageWindow(index) {
  messageWindow[index].classList.remove('active');
}

showModalButton.addEventListener('click', () => {
  messageWindow[2].classList.add('active');
  document.body.classList.add('block')
})

messageWindowClose.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.body.classList.remove('block')
    hideMessageWindow(index)
  })
})
