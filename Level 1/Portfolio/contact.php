<?php
    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form data

        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        // Validate the form data

        if (empty($name) || empty($email) || empty($message)) {
            echo "Please fill in all the fields.";
        } else {
            // Send the email

            $to = "placideshema11@gmail.com";
            $subject = "New contact form submission";
            $body = "Name: $name\nEmail: $email\nMessage: $message";
            $headers = "From: $email";


            if (mail($to, $subject, $body)) {
                echo "Thank you for your message. We will get back to you shortly.";
            } else {
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
    }
?>