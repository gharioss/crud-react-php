<?php

require 'connect.php';

$id_student = $_GET['id'];

$sql = $pdo->query("DELETE FROM students WHERE id_student = $id_student LIMIT 1");

if ($sql) {
    echo "deleted";
} else {
    echo "there was a pb";
}
