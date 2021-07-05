<?php
require('config.php');
$my_url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$value = substr($my_url, strrpos($my_url, '/') + 1) . "\n";

$response = array();
$resultArray = [];
try {
    $sql = "SELECT * FROM user_data ";
    $result = mysqli_query($link,$sql) or trigger_error(mysqli_error() . $sql);
    $resultCount = mysqli_num_rows($result);
    if ($resultCount > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $resultArray[] = $row;
        }
        $response['status'] = 'Success';
        $response['message'] = "Data Obtained";
        $response['results'] = $resultArray;
    } else {
        $response['status'] = 'Error';
        $response['message'] = 'No Data in the Database';
        die();
    }
    echo json_encode($response);
} catch (exception $e) {
    $response['status'] = 'Error';
    $response['message'] = $e->getMessage();
    echo json_encode($response);
    die();
}