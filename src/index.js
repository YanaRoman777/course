import './pages/index.css';


const questionsButton = document.querySelectorAll('.questions__button');
const questionsParagraph = document.querySelector('.questions__paragraph');
const formElement = document.querySelector('.form_consultation');
const formAdd = document.querySelector('#form-add');
const formAddfooter = document.querySelector('#form-add-footer');
const buttonElement = document.querySelector('.form__submit');
const buttonElementfooter  = formAddfooter.querySelector('.form__submit');

// функция открытия/закрытия ответа
function activeParagraph () {
  questionsParagraph.classList.toggle('questions__paragraph-active');
}
Array.from(document.querySelectorAll(".questions__item")).forEach(e=>{e.addEventListener("click",(function(){
  this.classList.toggle("questions__item-active");
  let e=this.querySelector(".questions__paragraph");
  e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))});
// функция очистки формы 
function resetFormAdd() {
  formElement.reset();
}
function resetFormAddfooter() {
  formAddfooter.reset();
}

// submit
const submitEditProfileForm = evt => {
  evt.preventDefault();
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('.form__submit_inactive');
  resetFormAdd(formAdd);
  openPopup();
}

const submitEditProfileFormFooter = evt => {
  evt.preventDefault();
  buttonElementfooter.setAttribute('disabled', true);
  buttonElementfooter.classList.add('.form__submit_inactive');
  resetFormAddfooter();
  openPopup();
}
formElement.addEventListener('submit', submitEditProfileForm);
formAddfooter.addEventListener('submit', submitEditProfileFormFooter);

const invitationButton = document.querySelectorAll('.invitation__button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

// Открытие попап 
function openPopup () {
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

// закрытие попапа на x
closeButton.addEventListener('click', () => closePopup());


const buttonPackage1 = document.querySelector('#buttonPackage1');
const buttonPackage2 = document.querySelector('#buttonPackage2');
const priceForm = document.querySelector('#price-form');
const titlePackage1 = document.querySelector('#titlePackage1');
const titlePackage2 = document.querySelector('#titlePackage2');
const formPackage = document.querySelector('#Package');


// Открытие формы оплаты
function openPriceForm1 () {
  priceForm.classList.add('price-form_opened');
  titlePackage1.classList.remove('price-form__title');
  titlePackage2.classList.add('price-form__title');
  formPackage.value = '13750';
};

function openPriceForm2 () {
  priceForm.classList.add('price-form_opened');
  titlePackage1.classList.add('price-form__title');
  titlePackage2.classList.remove('price-form__title');
  formPackage.value = '17875';
};
buttonPackage1.addEventListener('click', () => openPriceForm1());
buttonPackage2.addEventListener('click', () => openPriceForm2());

// Вынесем все необходимые элементы формы 
const configValid ={
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  }
  
  // Функция, которая добавляет класс с ошибкой
  const showInputError = (formElement, inputElement, errorMessage, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);
  };
  
  // Функция, которая удаляет класс с ошибкой
  const hideInputError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
  };
  
  // Функция проверки валидности нескольких полей, принимает массив полей
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    });
  };
  // Функция переключателя кнопки принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
  const toggleButtonState = (inputList, buttonElement, obj) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(obj.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(obj.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };
  
  // Функция, которая проверяет валидность поля
  const isValid = (formElement, inputElement, obj) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, obj);
    } else {
      hideInputError(formElement, inputElement, obj);
    }
  };
  // Добавление обработчиков всем полям формы
  const setEventListeners = (formElement, obj) => {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, obj);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        isValid(formElement, inputElement, obj);
        toggleButtonState(inputList, buttonElement, obj);
      });
    });
  };
  
  // Добавление обработчиков всем формам
  const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, obj);
    });
  };
  
  // Вызовем функцию
  enableValidation(configValid);
  
  
  
  // Функция сделай кнопку неактивной
  function disableSubmitButton (obj) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(obj.inactiveButtonClass);
  }
   // Функция сделай кнопку активной
  function removedisableSubmitButton (obj) {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(obj.inactiveButtonClass);
  }