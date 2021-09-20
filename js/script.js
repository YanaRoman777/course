const invitationButton = document.querySelectorAll('.invitation__button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.form');
const formAdd = document.querySelector('#form-add');
const buttonElement = formAdd.querySelector('.form__submit');

// Открытие попап 
function openPopup () {
  resetFormAdd(formAdd);
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('.form__submit_inactive');
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
  popup.addEventListener('click', closePopupOnOverlay);
};

// Закрытие попапов
function closePopup() {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
  popup.removeEventListener('click', closePopupOnOverlay);
}

// закрытие попап кликом на оверлей
function closePopupOnOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// закрытие попап нажатием на esc
function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// функция очистки формы 
function resetFormAdd(formAdd) {
  formAdd.reset();
}

// Открытие и закрытие попапа
for (var a = 0; a < invitationButton.length; a++) {    
  invitationButton[a].addEventListener('click',function(){
    openPopup()
  });
}
closeButton.addEventListener('click', () => closePopup());

// submit
const submitEditProfileForm = evt => {
  evt.preventDefault();
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('.form__submit_inactive');
  resetFormAdd(formAdd);
  closePopup();
}
formElement.addEventListener('submit', submitEditProfileForm);

