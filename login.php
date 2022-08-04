<?php
include('db.php');

$username = $decodedData['username'];
$password = ($decodedData['password']); //password is hashed

$SQL = "SELECT * FROM user WHERE username = '$username'";
$exeSQL = mysqli_query($conn, $SQL);
$checkPass =  mysqli_num_rows($exeSQL);

if ($checkPass != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $password) {
        $Message = "pw WRONG";
    } else {
        $Message = "Success";
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);