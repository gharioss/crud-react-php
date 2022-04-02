<?php

require "connect.php";

$id = $_GET['id'];

$student = [];

$sql = $pdo->query("SELECT * FROM students WHERE id_student = $id LIMIT 1");

if ($sql) {
    foreach ($sql as $i) {
        $student['id_student'] = $i['id_student'];
        $student['first_name'] = $i['first_name'];
        $student['last_name'] = $i['last_name'];
        $student['email'] = $i['email'];
    }

    echo json_encode($student);
} else {
    echo json_encode("there was a pb");
}
