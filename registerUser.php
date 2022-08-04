<?php

    $host = "localhost";
    $user = "root";
    $pass = "";

    $CN = mysqli_connect($host, $user, $pass);
    $DB = mysqli_select_db($CN, "ttest_dexa");

    $EncodeData = file_get_contents('php://input');
    $DecodedData=json_decode($EncodeData, true);

    $name = $DecodedData['name'];
    $username = $DecodedData['username'];
    $password = $DecodedData['password'];

    $IQ = "insert into user (nama, userName, password) values ('$name', '$username', '$password')";

    $R = mysqli_query($CN, $IQ);

    if($R){
        $message = "successfully register user ";
    }
    else{
        $message = "failed register user ";
    }

    $Response[]= array("message"=>$message);
    echo json_encode($Response);

?>