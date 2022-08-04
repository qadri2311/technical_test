<?php
include('db.php');

$SQL = "SELECT * FROM employee ";
$exeSQL = mysqli_query($conn, $SQL);
$employeList =  mysqli_num_rows($exeSQL);

if ($employeList ) {
    while($arrayu = mysqli_fetch_assoc($exeSQL)){
        $flag [] = $arrayu;
    }
    
     echo json_encode($flag);
} else echo json_encode("null");


