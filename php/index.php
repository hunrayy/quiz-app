<?php

// index.php
require_once 'vendor/autoload.php'; // Include the Composer autoloader

use App\Database; // Use the Database class

// Create an instance of the Database class
$database = new Database();

// Call the function to check if the admin exists and create it if not
$database->createSuperAdmin();



























// $_host = ""; // Provide the correct host
// $_user = "root";      // Provide the correct username
// $_password = "";      // Provide the correct password
// $_db = "whoWantsToBeAMillionaire"; // Provide the correct database name

// // Function to check and create the admin if not already present
// function createSuperAdmin() {
//     global $_conn;

//     // Check if an admin already exists
//     $preRegisteredAdmin = 'SELECT * FROM `admin` LIMIT 1';
//     $result = mysqli_query($_conn, $preRegisteredAdmin);

//     if (mysqli_num_rows($result) > 0) {
//         echo "Admin already registered.";
//     } else {
//         // Admin not found, create one
//         $email = "johndoe@gmail.com";
//         $password = "password"; // The plain password

//         // Hash the password using password_hash
//         $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

//         // Insert the new admin
//         $insertAdmin = 'INSERT INTO `admin` (email, password) VALUES (?, ?)';
//         $stmt = $_conn->prepare($insertAdmin);
//         $stmt->bind_param("ss", $email, $hashedPassword);

//         if ($stmt->execute()) {
//             echo "Admin created successfully.";
//         } else {
//             echo "Failed to create admin.";
//         }
//     }
// }

// try {
//     $_conn = mysqli_connect($_host, $_user, $_password, $_db);
//     if ($_conn) {
//         // Call the function to check if the admin exists and create it if not
//         createSuperAdmin();
//     } else {
//         echo "Unable to connect to the database.";
//     }
// } catch (Exception $e) {
//     echo "Unable to connect: " . mysqli_connect_error();
// }

?>
