import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
  emailInput: document.querySelector('.js-feedback-form input[name="email"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.emailInput.addEventListener('input', throttle(onEmailInput, 500));

populateForm();

function onFormSubmit(evt) {
  evt.preventDefault();

  const email = refs.emailInput.value;
  const message = refs.textarea.value;

  const feedbackData = {
    email,
    message,
  };

  console.log(feedbackData);

  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  saveFormState({ message });
}

function onEmailInput(evt) {
  const email = evt.target.value;
  saveFormState({ email });
}

function saveFormState(data) {
  const savedState = getSavedFormState();
  const updatedState = { ...savedState, ...data };

  localStorage.setItem('feedback-form-state', JSON.stringify(updatedState));
}

function getSavedFormState() {
  const savedState = localStorage.getItem('feedback-form-state');
  return savedState ? JSON.parse(savedState) : {};
}

function populateForm() {
  const savedState = getSavedFormState();

  if (savedState.message) {
    refs.textarea.value = savedState.message;
  }

  if (savedState.email) {
    refs.emailInput.value = savedState.email;
  }
}
