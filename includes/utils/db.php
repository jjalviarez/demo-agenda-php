<?php

define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','123456');
define('DB_NAME','agendaphp');
define('DB_PORT','3306');
  $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
  if ($conn->connect_error) {
    // code...
    echo $error -> $conn->connect_error;
  }

 ?>
