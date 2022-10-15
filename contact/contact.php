<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $mes = $_POST['mes_text'];

    $email_from = 'Tadeas.Lobreis44@gmail.com';
    $email_subject = "New Response";

    $email_body = : "User Name: $name.\n".
                        "User Email: $email.\n".
                        "User Message: $mes.\n.";
                        
                        
    $to = 'Tadeas.Lobreis99@gmail.com';

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>