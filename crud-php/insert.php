<?php
require 'connect.php';


$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $decoded = json_decode($postdata);

    $first_name = $decoded->first_name;
    $last_name = $decoded->last_name;
    $email = $decoded->email;


    $sql = $pdo->prepare("INSERT INTO students (first_name, last_name, email) VALUES (:first_name, :last_name, :email)");
    $sql->bindParam(":first_name", $first_name);
    $sql->bindParam(":last_name", $last_name);
    $sql->bindParam(":email", $email);
    $sql->execute();

    if ($sql) {
        print_r("it workedDDDDDDDDDDDDDDDD");
    } else {
        print_r('it didnt work');
    }
}
