<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "Ungenannt";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "Keine E-Mail";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "Keine Nachricht";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Ungültige Mail"]);
        exit;
    }

    $to = $_ENV['juergen.loschke@koelsche-kuemmerer.koeln'];
    $subject = "Neue Formularmeldung";

    $headers = "From: " . $_ENV['kontakt@koelsche-kuemmerer.koeln'] . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\nMail: $email\nNachricht:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Mail gesendet"]);
    } else {
        echo json_encode(["success" => false, "message" => "Fehler beim Senden einer E-Mail"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Fehler: Keine POST-Anfrage"]);
}
?>