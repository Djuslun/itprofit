const messageWindow = document.querySelector('.pop-up');
const messageWindowClose = document.querySelector('.pop-up__close');

export function showMessageWindow() {
  messageWindow.classList.add('active');
}

function hideMessageWindow() {
  messageWindow.classList.remove('active');
}

messageWindowClose.addEventListener('click', hideMessageWindow)