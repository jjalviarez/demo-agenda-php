const contactForm = document.querySelector("#contato");
const contactList = document.querySelector("#listado-contactos tbody");

eventListener();

function eventListener() {
  //formulatio crear editar
  contactForm.addEventListener("submit", readForm);

  //botorn eliminat
  contactList.addEventListener("click", deleteContact);
}

function deleteContact(e) {
  if (e.target.parentElement.classList.contains("btn-borrar")) {
    id = e.target.parentElement.getAttribute("data-id");
    if (confirm("Eliminar Contacto?")) {
      // objeto request
      var xhr = new XMLHttpRequest();

      // abrirlo
      xhr.open("GET", `includes/models/contact.php?id=${id}&action=delete`, true);

      // revisar que cambie
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          res = JSON.parse(xhr.responseText);
          if (res.res = 'success') {
            showNotify("Contacto Eliminado", "success"); // se le envia Texto y tipo
            e.target.parentElement.parentElement.parentElement.remove();

          } else {
            showNotify("Error al Eliminar", "error"); // se le envia Texto y tipo
          }
        }
      };

      xhr.send();
    }
  }
}

function readForm(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const company = document.querySelector("#company").value;
  const phone = document.querySelector("#phone").value;
  const action = document.querySelector("#action").value;
  if (name === "" || company === "" || phone === "") {
    showNotify("Llenar Todos los Campos", "error"); // se le envia Texto y tipo
  } else {
    const infoContact = new FormData();
    infoContact.append("name", name);
    infoContact.append("company", company);
    infoContact.append("phone", phone);
    infoContact.append("action", action);
    if (action === "create") {
      insertDB(infoContact);
    } else {
      const id = document.querySelector("#id").value;
      infoContact.append("id", id);
      updateDB(infoContact);
    }
  }
}

function showNotify(message, type) {
  const notify = document.createElement("div");
  notify.classList.add(type, "notify", "shadow");
  notify.textContent = message;

  //Formulario
  contactForm.insertBefore(notify, document.querySelector("form legend"));

  //Tiempo mostrar notify
  setTimeout(() => {
    notify.classList.add("show");
    setTimeout(() => {
      notify.classList.remove("show");
      setTimeout(() => {
        notify.remove();
      }, 500);
    }, 3000);
  }, 100);
}

function insertDB(infoContact) {
  // crearlo
  var xhr = new XMLHttpRequest();

  // abrirlo
  xhr.open("POST", "includes/models/contact.php", true);

  // revisar que cambie
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      res = JSON.parse(xhr.responseText);
      showNotify("Contacto Creado", "success"); // se le envia Texto y tipo
      document.querySelector("form#contato").reset();
      const newContact = document.createElement("tr");
      newContact.innerHTML = `
        <td>${res.datos.name}</td>
        <td>${res.datos.company}</td>
        <td>${res.datos.phone}</td>
        <td>
          <a class="btn-editar btn" href="editar.php?id=${res.datos.id}">
            <i class="fas fa-pen-square"></i>
          </a>
          <button data-id="${res.datos.id}" type="button" class="btn-borrar btn">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      contactList.appendChild(newContact);
    }
  };

  xhr.send(infoContact);
}

function updateDB(infoContact) {}
