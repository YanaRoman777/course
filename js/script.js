const questionsButton = document.querySelectorAll('.questions__button');
const questionsParagraph = document.querySelector('.questions__paragraph');
const formElement = document.querySelector('.form');
const formAdd = document.querySelector('#form-add');
const buttonElement = document.querySelector('.form__submit');

// функция открытия/закрытия ответа
function activeParagraph () {
  questionsParagraph.classList.toggle('questions__paragraph-active');
}
Array.from(document.querySelectorAll(".questions__item")).forEach(e=>{e.addEventListener("click",(function(){
  this.classList.toggle("questions__item-active");
  let e=this.querySelector(".questions__paragraph");
  e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))});
// функция очистки формы 
function resetFormAdd(formAdd) {
  formElement.reset();
}


// submit
const submitEditProfileForm = evt => {
  evt.preventDefault();
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('.form__submit_inactive');
  resetFormAdd();
}
formElement.addEventListener('submit', submitEditProfileForm);
