<?php
namespace Millionaire\Controller;

class Database {
    private $conn;
    private $host = "localhost"; // Correct host
    private $user = "root";      // Correct username
    private $password = "";      // Correct password
    private $db = "whoWantsToBeAMillionaire"; // Correct database name

    // Constructor to establish database connection
    public function __construct() {
        $this->conn = new \mysqli($this->host, $this->user, $this->password, $this->db);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    // Function to check and create an admin if not already present
    public function createSuperAdmin() {
        // Check if an admin already exists
        $preRegisteredAdmin = 'SELECT * FROM `admin` LIMIT 1';
        $result = $this->conn->query($preRegisteredAdmin);

        if ($result->num_rows > 0) {
            echo "Admin already registered.";
        } else {
            // Admin not found, create one
            $email = "johndoe@gmail.com";
            $password = "password"; // Plain password

            // Hash the password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Insert the new admin
            $insertAdmin = 'INSERT INTO `admin` (email, password) VALUES (?, ?)';
            $stmt = $this->conn->prepare($insertAdmin);
            $stmt->bind_param("ss", $email, $hashedPassword);

            if ($stmt->execute()) {
                echo "Admin created successfully.";
            } else {
                echo "Failed to create admin.";
            }
        }
    }

    // Getter for the database connection
    public function getConnection() {
        return $this->conn;
    }
}
