<?php
include 'includes/utils/controler.php';
include 'includes/layout/header.php';
$id = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
if (!$id) {
  die('No es Valido');
}

$res =  getContact($id)->fetch_assoc();

?>

<div class="contenedor-barra">
  <div class="contenedor barra">
    <a class="btn volver" href="index.php">Volver</a>
    <h1>Ediatr Contacto</h1>
  </div>
</div>
<div class="bg-amarillo contenedor shadow">
  <form id="contato" action="#">
    <legend>Edit Contact <span>**All fields are required</span> </legend>
    <?php include 'includes/layout/formContact.php'; ?>
  </form>
</div>

<?php include 'includes/layout/footer.php'; ?>