<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Server-side validation
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];
    $profileImage = $_FILES['profile-image']['name'];
    
    // Database connection
    $dbHost = 'localhost';  // Update with your database host
    $dbUser = 'root';       // Update with your database user
    $dbPass = 'password';   // Update with your database password
    $dbName = 'user_management'; // Update with your database name

    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

    if ($conn->connect_error) {
        die("Database connection failed: " . $conn->connect_error);
    }

    // SQL Insert query
    $insertSql = "INSERT INTO users (name, age, email, dob, contact, profile_image) VALUES (?, ?, ?, ?, ?, ?)";
    
    // Prepare and execute the query
    $stmt = $conn->prepare($insertSql);
    $stmt->bind_param("sissss", $name, $age, $email, $dob, $contact, $profileImage);

    if ($stmt->execute()) {
        // Data inserted successfully
        $_SESSION['user'] = [
            'name' => $name,
            'age' => $age,
            'email' => $email,
            'dob' => $dob,
            'contact' => $contact,
            'profileImage' => $profileImage
        ];
        header("Location: user_listing.php");
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>


