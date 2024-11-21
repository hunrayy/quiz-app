<?php
namespace Millionaire\Controller;

use mysqli;
use Exception;
use \Firebase\JWT\JWT;
use Dotenv\Dotenv;

require_once __DIR__ . '/../../vendor/autoload.php';


$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();



class Auth {
    private $_conn;


    public function __construct($dbConnection) {
        $this->_conn = $dbConnection;
    }

    public function login($email, $password) {
        // Ensure email and password are provided
        if (empty($email) || empty($password)) {
            return ['code' => 'error', 'message' => 'Email and password are required.'];
        }

        // Sanitize email input to prevent SQL Injection
        $email = $this->_conn->real_escape_string($email);

        // Prepare the SQL query to fetch the user by email
        $sql = "SELECT * FROM `admin` WHERE email = ?";
        $stmt = $this->_conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Check if user exists
        if ($result->num_rows === 0) {
            return ['status' => false, 'message' => 'Invalid email or password.'];
        }

        // Fetch the user data
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Password matches, generate a JWT token
            $issuedAt = time();
            $expirationTime = $issuedAt + 3600;  // jwt valid for 1 hour from the issued time
            $payload = array(
                "iat" => $issuedAt,
                "exp" => $expirationTime,
                "user_email" => $user['email']
            );

            // Encode the payload to generate the JWT
            $secretKey = $_ENV['JWT_SECRET_KEY']; // secret key from env

            $jwt = JWT::encode($payload, $secretKey, 'HS256');


            return [
                'code' => 'login-success', 
                'message' => 'login successful', 
                'data' => [
                    'email' => $user['email'], 
                    'token' => $jwt
                ]
            ];
        } else {
            // Invalid password
            return ['code' => 'error', 'message' => 'Invalid email or password.'];
        }
    }

    // Log out function
    public function logout() {
        session_start();
        session_unset();
        session_destroy();
        return ['status' => true, 'message' => 'Logged out successfully.'];
    }
}
