<?php include 'includes/layout/header.php'; ?>

<div class="contenedor-barra">
  <h1>Agenta de Contactos</h1>
</div>
<div class="bg-amarillo contenedor shadow">
  <form id="contato" action="#">
    <legend>Add Contact <span>**All fields are required</span> </legend>
    <div class="campos">
      <div class="campo">
        <label for="name">Name:</label>
        <input type="text" placeholder="Contact Name" name="name" id="name">
      </div>
      <div class="campo">
        <label for="company">Company:</label>
        <input type="text" placeholder="Contact Company" company="company" id="company">
      </div>
      <div class="campo">
        <label for="phone">Phone:</label>
        <input type="tel" placeholder="Phone" phone="phone" id="phone">
      </div>
    </div>
    <div class="campo enviar">
      <input type="submit" value="Add">
    </div>
  </form>
</div>
<div class="bg-blanco contenedor shadow contact">
  <div class="contenedor-contact">
    <h2>Contacts</h2>
    <input type="text" id="buscar" class="buscador shadow" placeholder="Buscar">
    <p class="total-contactos"><span>3</span> Contactos</p>
    <div class="contenedor-tabla">
      <table id="listado-contactos" class="listado-contactos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Empresa</th>
            <th>Tel</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jorge</td>
            <td>Jorge Company</td>
            <td>123456</td>
            <td>
              <a class="btn-editar btn" href="#">
                <i class="fas fa-pen-square"></i>
              </a>
              <button data-id="1" type="button" class="btn-borrar btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Jose</td>
            <td>Jorge Company</td>
            <td>87654</td>
            <td>
              <a class="btn-editar btn" href="#">
                <i class="fas fa-pen-square"></i>
              </a>
              <button data-id="1" type="button" class="btn-borrar btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Pedro</td>
            <td>Juan Company</td>
            <td>1245678</td>
            <td>
              <a class="btn-editar btn" href="#">
                <i class="fas fa-pen-square"></i>
              </a>
              <button data-id="1" type="button" class="btn-borrar btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

<?php include 'includes/layout/footer.php'; ?>