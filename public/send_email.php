<?php
ob_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

echo "<pre>";
var_dump($_ENV);
echo "</pre>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "Ungenannt";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "Keine E-Mail";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "Keine Nachricht";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Ungültige Mail"]);
        exit;
    }

    $to = $_ENV['MAIL_DESTINATION'];
    $from = $_ENV['MAIL_ORIGIN'];
    
    if (!$to || !$from) {
        echo json_encode(["success" => false, "message" => "Fehler: Konnte die .env-Variablen nicht laden"]);
        exit;
    }

    $subject = "Neue Formularmeldung";
    $headers = "From: $from\r\n" .
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

ob_end_flush();
?>