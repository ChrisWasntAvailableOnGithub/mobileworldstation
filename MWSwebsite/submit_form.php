<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $postcode = $_POST["postcode"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $maininput = $_POST["maininput"];
    
    $data = "Name: $name\nPostcode: $postcode\nEmail: $email\nTelephone: $telephone\nFeedback: $maininput\n";
    
    $file = 'form_responses.txt';
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
    
    // Redirect back to index page
header("Location: index.html");
exit(); // Make sure to exit to prevent further execution
}
?>