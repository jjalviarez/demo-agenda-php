<?php
include 'includes/layout/header.php';
include 'includes/utils/controler.php';
?>


<div class="contenedor-barra">
  <h1>Agenta de Contactos</h1>
</div>
<div class="bg-amarillo contenedor shadow">
  <form id="contato" action="#">
    <legend>Add Contact <span>**All fields are required</span> </legend>
    <?php include 'includes/layout/formContact.php'; ?>
  </form>
</div>
<div class="bg-blanco contenedor shadow contact">
  <div class="contenedor-contact">
    <h2>Contacts</h2>
    <input type="text" id="buscar" class="buscador shadow" placeholder="Buscar">
    <p class="total-contactos"><span>0</span> Contactos</p>
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
          <?php
          $contacs = getContacts();
          if ($contacs->num_rows) {
            foreach ($contacs as $contac) {             
          ?>
              <tr>
                <td><?php echo $contac['name'];?></td>
                <td><?php echo $contac['company'];?></td>
                <td><?php echo $contac['phone'];?></td>
                <td>
                  <a class="btn-editar btn" href="editar.php?id=<?php echo $contac['id'];?>">
                    <i class="fas fa-pen-square"></i>
                  </a>
                  <button data-id="<?php echo $contac['id'];?>" type="button" class="btn-borrar btn">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
          <?php }
          } ?>
        </tbody>
      </table>
    </div>
  </div>

</div>

<?php include 'includes/layout/footer.php'; ?>