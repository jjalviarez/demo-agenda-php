const contactForm = document.querySelector('#contato');

eventListener();

function eventListener() {
  contactForm.addEventListener('submit', readForm);

}

function readForm(e) {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const company = document.querySelector('#company').value;
  const phone = document.querySelector('#phone').value;
  if(name === '' || company === '' || phone === '') {
    alert('llenar todo')
  }
}