import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const data = {};
const inputEventHandler = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;
  data.email = email.value;
  data.message = message.value;
};

const saveData = () => {
  if (data.email !== null || data.message !== null) {
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }
};

form.addEventListener('input', inputEventHandler);
form.addEventListener('input', throttle(saveData, 500));

const availableData = localStorage.getItem('feedback-form-state');

if (availableData) {
  const dataParsed = JSON.parse(availableData);
  form.elements.email.value = dataParsed.email;
  form.elements.message.value = dataParsed.message;
}

const submitEventHandler = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('You have to write email and message to proceed');
  } else {
    data.email = email.value;
    data.message = message.value;
    console.log(`Email: ${data.email}, Message: ${data.message}`);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
};

form.addEventListener('submit', submitEventHandler);
