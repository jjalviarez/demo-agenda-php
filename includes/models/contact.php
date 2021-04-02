<?php
switch ($_POST['action']) {
  case "create":
    require_once('../utils/db.php');

    $name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
    $company = filter_var($_POST['company'],FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['phone'],FILTER_SANITIZE_STRING);
    try {
      $stmt = $conn->prepare("INSERT INTO contacts ( name, company, phone) VALUES (?, ?, ?)");
      $stmt->bind_param("sss", $name, $company, $phone);
      $stmt->execute();
      if($stmt->affected_rows==1) {
        $res = array(
          'res' => 'success',
          'datos' => array (
            'name' => $name,
            'company' => $company,
            'phone' => $phone,            
            'id' => $stmt->insert_id    
          )
        );
      }

      $stmt->close();
      $conn->close();
    } catch (\Exception $e) {
      $res = array(
        'error' =>$e->getMessage()
    );
    }

    break;
  case "read":
    echo "Your favorite color is red!";
    break;
  case "update":
    echo "Your favorite color is blue!";
    break;
  case "delete":
    echo "Your favorite color is green!";
    break;
}


switch ($_GET['action']) {
  case "read":
    echo "Your favorite color is red!";
    break;
  case "update":
    echo "Your favorite color is blue!";
    break;
  case "delete":    
    require_once('../utils/db.php');

    $id = filter_var($_GET['id'],FILTER_SANITIZE_NUMBER_INT);
    if ($id) {
      try {
      $stmt = $conn->prepare("DELETE FROM contacts WHERE id = ? ");
      $stmt->bind_param("i", $id);
      $stmt->execute();
      if($stmt->affected_rows==1) {
        $res = array(
          'res' => 'success'
        );
      }

      $stmt->close();
      $conn->close();
    } catch (\Exception $e) {
      $res = array(
        'error' =>$e->getMessage()
    );
    }
  }

    break;
}

echo json_encode($res)

?>