<?php
namespace Millionaire\Controller;


use Millionaire\Controller\Database;
use mysqli;
use Exception;
use \Firebase\JWT\JWT;
use Dotenv\Dotenv;




class Question {
    private $_conn;


    public function __construct() {
        // Get the database connection from the Database class
        $db = new Database();
        $this->_conn = $db->getConnection();
    }

    // Insert question into the database
    public function insertQuestionIntoDB($question, $firstOption, $secondOption, $thirdOption, $fourthOption, $rightOption) {
        dd($question);
        // Database connection (assuming MySQL with mysqli)
        $mysqli = new mysqli("localhost", "your_db_user", "your_db_password", "your_db_name");

        if ($mysqli->connect_error) {
            return [
                'message' => 'Database connection error',
                'code' => 'error',
                'reason' => $mysqli->connect_error
            ];
        }

        // Prepare the options array
        $options_array = [$firstOption, $secondOption, $thirdOption, $fourthOption];

        // Prepare the SQL statement
        $stmt = $mysqli->prepare("INSERT INTO questions (question, options, rightOption) VALUES (?, ?, ?, ?)");
        $options_json = json_encode($options_array); // Store options as a JSON string
        $stmt->bind_param("isss", $admin_id, $question, $options_json, $rightOption);

        if ($stmt->execute()) {
            return [
                'message' => 'Question successfully inserted into database',
                'code' => 'success'
            ];
        } else {
            return [
                'message' => 'Question could not be inserted into database',
                'code' => 'error',
                'reason' => $stmt->error
            ];
        }

        $stmt->close();
        $mysqli->close();
    }

}
