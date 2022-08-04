<?php
include('db.php');

$no_Ktp = $decodedData['no_Ktp'];
$first_name = $decodedData['first_name'];
$last_name = $decodedData['last_name']; //password is hashed
$birth_date = $decodedData['birth_date'];
$hometown = $decodedData['hometown'];
$gender = $decodedData['gender']; //password is hashed

$SQL = "SELECT * FROM employee WHERE noKtp = '$no_Ktp'";
$exeSQL = mysqli_query($conn, $SQL);
$checKtp =  mysqli_num_rows($exeSQL);

if ($checKtp != 0) {
    $Message = "Already registered";
} else {

    $InsertQuerry = "INSERT INTO employee(noKtp, front_name, back_name, birth_date, hometown, gender) VALUES('$no_Ktp','$first_name', '$last_name','$birth_date','$hometown', '$gender')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Complete--!";
    } else {
        $Message = "Error";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);