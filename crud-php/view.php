<?php

require 'connect.php';

$students = [];

$sql = $pdo->query("SELECT * FROM students");

if ($sql) {
    $cr = 0;
    foreach ($sql as $student) {
        $students[$cr]['id_student'] = $student['id_student'];
        $students[$cr]['first_name'] = $student['first_name'];
        $students[$cr]['last_name'] = $student['last_name'];
        $students[$cr]['email'] = $student['email'];
        $cr++;
    }

    echo json_encode($students);
} else {
    echo json_encode("there was a problem");
}
