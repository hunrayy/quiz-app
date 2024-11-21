<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: *");
header("Access-Control-Allow-Headers: *");

require "vendor/autoload.php";
use Millionaire\Question;

$questionClass = new Question();

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $data = file_get_contents("php://input");
    $question = json_decode($data)->question;
    $firstOption = json_decode($data)->firstOption;
    $secondOption = json_decode($data)->secondOption;
    $thirdOption = json_decode($data)->thirdOption;
    $fourthOption = json_decode($data)->fourthOption;
    $rightOption = json_decode($data)->rightOption;
    


    // Call the login method of the Auth class
    $response = $questionClass->insertQuestionIntoDB($question, $firstOption, $secondOption, $thirdOption, $fourthOption, $rightOption);

    // Return the login response as JSON
    echo json_encode($response);

}