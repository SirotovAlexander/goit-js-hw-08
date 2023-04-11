import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inPut = document.querySelector('input');
const text = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const STORAGE_OBJECT = {};

checkSave();

form.addEventListener('submit', onSubmit);
inPut.addEventListener('input', throttle(onInputMail, 500));
text.addEventListener('input', throttle(onInputText, 500));

function onSubmit(event) {
  event.preventDefault();
  console.log(STORAGE_OBJECT);
  event.currentTarget.reset();
  localStorage.clear();
}

function onInputMail(event) {
  STORAGE_OBJECT.email = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_OBJECT));
}

function onInputText(event) {
  STORAGE_OBJECT.message = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_OBJECT));
}

function checkSave() {
  const save = localStorage.getItem(STORAGE_KEY);

  if (save) {
    const parseFromSave = JSON.parse(save);

    inPut.value = parseFromSave.email;
    text.value = parseFromSave.message;
  }
}
