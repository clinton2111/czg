<?php
require('config.php');

if (isset($_POST["userName"]) || isset($_POST["userNumber"])) {
    $response = array();
    try {
        $sql = "INSERT INTO user_data (user_name,user_number) VALUES ('" . addslashes($_POST['userName']) . "','" . addslashes($_POST["userNumber"]) . "')";
        $result = mysqli_query($link,$sql) or die(mysqli_error());
        if ($result == 1) {
            $response['status'] = 'Success';
            $response['message'] = 'Details uploaded successfully';
        } else {
            $response['status'] = 'Error';
            $response['message'] = 'Error Storing Data';
        }
        echo json_encode($response);
    } catch (exception $e) {
        $response['status'] = 'Error';
        $response['message'] = $e->getMessage();
        echo json_encode($response);
        die();
    }
}