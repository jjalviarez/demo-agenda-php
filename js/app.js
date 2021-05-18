const contactForm = document.querySelector("#contato");
const contactList = document.querySelector("#listado-contactos tbody");
const buscar = document.querySelector("#buscar");

eventListener();

function eventListener() {
  //formulatio crear editar
  contactForm.addEventListener("submit", readForm);

  //botorn eliminat
  if (contactList) {
    contactList.addEventListener("click", deleteContact);
    nunContact();
  }

  if (buscar) {
    buscar.addEventListener("input", buscaContact);
  }
}

function deleteContact(e) {
  if (e.target.parentElement.classList.contains("btn-borrar")) {
    id = e.target.parentElement.getAttribute("data-id");
    if (confirm("Eliminar Contacto?")) {
      // objeto request
      var xhr = new XMLHttpRequest();

      // abrirlo
      xhr.open(
        "GET",
        `includes/models/contact.php?id=${id}&action=delete`,
        true
      );

      // revisar que cambie
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          res = JSON.parse(xhr.responseText);
          if ((res.res = "success")) {
            showNotify("Contacto Eliminado", "success"); // se le envia Texto y tipo
            e.target.parentElement.parentElement.parentElement.remove();
            nunContact();
          } else {
            showNotify("Error al Eliminar", "error"); // se le envia Texto y tipo
          }
        }
      };

      xhr.send();
    }
  }
  nunContact()
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
      if (res.res === "success") {
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
        nunContact();
      }
    }
  };

  xhr.send(infoContact);
}

function updateDB(infoContact) {
  // crearlo
  var xhr = new XMLHttpRequest();

  // abrirlo
  xhr.open("POST", "includes/models/contact.php", true);

  // revisar que cambie
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      res = JSON.parse(xhr.responseText);
      if (res.res === "success") {
        showNotify("Contacto Actualizado", "success"); // se le envia Texto y tipo
      }
      setTimeout(() => {
        window.location.href = "index.php";
      }, 3000);
    }
  };

  xhr.send(infoContact);
}

function buscaContact(e) {
  /*
  console.log(e.target.value)
  busca= e.target.value

      // objeto request
      var xhr = new XMLHttpRequest();

      // abrirlo
      xhr.open(
        "GET",
        `includes/models/contact.php?buscar=${busca}&action=read`,
        true
      );

      // revisar que cambie
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          res = JSON.parse(xhr.responseText);
          if ((res.res = "success")) {
            showNotify("Contacto Eliminado", "success"); // se le envia Texto y tipo
            e.target.parentElement.parentElement.parentElement.remove();
          } else {
            showNotify("Error al Eliminar", "error"); // se le envia Texto y tipo
          }
        }
      };

      xhr.send();
      */

  const exp = new RegExp(e.target.value, "i"),
    registros = document.querySelectorAll("tbody tr");
  //console.log(registros);
  registros.forEach((registro) => {
    //console.log(      registro.childNodes[1].textContent.replace(/\s/g, " ").search(exp)    );
    if (
      registro.childNodes[1].textContent.replace(/\s/g, " ").search(exp) == -1
    ) {
      registro.style.display = "none";
    } else {
      registro.style.display = "table-row";
    }
  });
  nunContact()
}

function nunContact() {
    const totalContact = document.querySelectorAll('.listado-contactos tbody tr:not([style*="display: none"])').length;
    const setTotalContact = document.querySelector('.total-contactos span');
    setTotalContact.textContent= totalContact
}
