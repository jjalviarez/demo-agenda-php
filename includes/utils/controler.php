<?php

function getContacts() {
  try {
    require_once("db.php");
    $sql = "SELECT * FROM `contacts`";
    $res = $conn->query($sql);
    return $res;
  } catch (\Exception $e) {
    echo $e->getMessage();
    return false;
  }

}


?>