<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: *");
header("Access-Control-Allow-Headers: *");

require "vendor/autoload.php";
use Millionaire\Controller\Auth;

$mysqli = new mysqli('localhost', 'root', '', 'whoWantsToBeAMillionaire');
if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}


// Instantiate the Auth class with the database connection
$auth = new Auth($mysqli);


if($_SERVER["REQUEST_METHOD"] == "POST"){
    $data = file_get_contents("php://input");
    $email = json_decode($data)->email;
    $password = json_decode($data)->password;

    // Call the login method of the Auth class
    $response = $auth->login($email, $password);

    // Return the login response as JSON
    echo json_encode($response);

}