<div class="campos">
  <div class="campo">
    <label for="name">Name:</label>
    <input type="text" placeholder="Contact Name" id="name" value="<?php echo ($res['name'] ? $res['name'] : '') ?>">
  </div>
  <div class="campo">
    <label for="company">Company:</label>
    <input type="text" placeholder="Contact Company" id="company" value="<?php echo ($res['company'] ? $res['company'] : '') ?>">
  </div>
  <div class="campo">
    <label for="phone">Phone:</label>
    <input type="tel" placeholder="Phone" id="phone" value="<?php echo ($res['phone'] ? $res['phone'] : '') ?>">
  </div>
</div>
<div class="campo enviar">
  <input type="hidden" id="action" value="<?php echo ($res['id'] ? 'update' : 'create') ?>">
  <?php if (isset($res['id'])) { ?>
  <input type="hidden" id="id" value="<?php echo $res['id']; ?>">
  <?php } ?>
  <input type="submit" value="<?php echo ($res['id'] ? 'Edit' : 'Add') ?>">
</div>