
const infoIcon = document.querySelector('.info-icon');
const closeIcon = document.querySelector('.close-icon');
const visitCard = document.querySelector('.visit-card');

function handleClickInfoIcon() {
  visitCard.classList.add('active');
}

infoIcon.addEventListener('click', handleClickInfoIcon);

function handleClickCloseIcon() {
  visitCard.classList.remove('active');
}

closeIcon.addEventListener('click', handleClickCloseIcon);


