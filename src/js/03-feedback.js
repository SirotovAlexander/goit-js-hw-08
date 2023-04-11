import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inPut = document.querySelector('input');
const text = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const STORAGE_OBJECT = {};
// console.dir(form);
// console.dir(inPut);
// console.dir(text);

form.addEventListener('submit', onSubmit);
inPut.addEventListener('input', throttle(onInputMail, 500));
text.addEventListener('input', throttle(onInputText, 500));

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
}

function onInputMail(event) {
  // console.log(event.target.value);
  STORAGE_OBJECT.email = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_OBJECT));
}

function onInputText(event) {
  // console.log(event.target.value);
  STORAGE_OBJECT.message = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_OBJECT));
}
