<?php

require "connect.php";

$postData = file_get_contents("php://input");

if (isset($postData) && !empty($postData)) {
    $request = json_decode($postData);

    $id = $request->id_student;
    $first_name = $request->first_name;
    $last_name = $request->last_name;
    $email = $request->email;

    $sql = $pdo->prepare("UPDATE students SET first_name = :first_name, last_name = :last_name, email = :email WHERE id_student = :id_student");
    $sql->bindParam("first_name", $first_name);
    $sql->bindParam("last_name", $last_name);
    $sql->bindParam("email", $email);
    $sql->bindParam("id_student", $id);
    $sql->execute();

    if ($sql) {
        print_r("IT WORKEDDDD");
    } else {
        print_r("it didnt work :(");
    }
}
