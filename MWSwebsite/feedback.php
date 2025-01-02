<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $postcode = $_POST["postcode"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $feedback = $_POST["maininput"];

    echo "Thank you for your feedback, $name!";
}
?>