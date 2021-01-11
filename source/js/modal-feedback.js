const contestButton = document.querySelector('.contest__button');
const modalValid = document.querySelector('.modal-valid');
const modalInvalid = document.querySelector('.modal-invalid');
const validCloseButton = document.querySelector('.modal-valid--close');
const invalidCloseButton = document.querySelector('.modal-invalid--close');
const inputFirstName = document.querySelector('.contest__f-name-value');
const inputSecondName = document.querySelector('.contest__s-name-value');
const inputEmail = document.querySelector('.contest__contact-email');

contestButton.addEventListener('click', function(evt) {
  if (!inputFirstName.value || !inputSecondName.value || !inputEmail.value) {
    evt.preventDefault();
    modalInvalid.classList.add('modal--show');
    if (!inputFirstName.value) {
      inputFirstName.classList.add('contest__form-input--invalid');
    }
    if (!inputSecondName.value) {
      inputSecondName.classList.add('contest__form-input--invalid');
    }
    if (!inputEmail.value) {
      inputEmail.classList.add('contest__form-input--invalid');
    }
  } else {
    evt.preventDefault();
    if (inputFirstName.classList.contains('contest__form-input--invalid')) {
      inputFirstName.classList.remove('contest__form-input--invalid');
    }
    if (inputSecondName.classList.contains('contest__form-input--invalid')) {
      inputSecondName.classList.remove('contest__form-input--invalid');
    }
    if (inputEmail.classList.contains('contest__form-input--invalid')) {
      inputEmail.classList.remove('contest__form-input--invalid');
    }
    modalValid.classList.add('modal--show');
  }
});

invalidCloseButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalInvalid.classList.remove('modal--show');
});

validCloseButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalValid.classList.remove('modal--show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalInvalid.classList.contains('modal--show')) {
      evt.preventDefault();
      modalInvalid.classList.remove('modal--show');
    }
    if (modalValid.classList.contains('modal--show')) {
      evt.preventDefault();
      modalValid.classList.remove('modal--show');
    }
  }
});
