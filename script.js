const popup = document.getElementById('popup');
const form = document.getElementById('consultation-form');
const message = document.getElementById('form-message');

function openPopup() {
  popup.style.display = 'block';
  popup.setAttribute('aria-hidden', 'false');
}

function closePopup() {
  popup.style.display = 'none';
  popup.setAttribute('aria-hidden', 'true');
}

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && popup.style.display === 'block') {
    closePopup();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = 'Please fill in all fields with valid details.';
    message.style.color = '#b00020';
    return;
  }

  message.textContent = 'Thank you! We will contact you shortly.';
  message.style.color = '#0a7a2f';
  form.reset();
});
