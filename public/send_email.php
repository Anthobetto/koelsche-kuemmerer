<?php
ob_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function cargarEnv($file) {
    if (!file_exists($file)) {
        return;
    }
    
    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue;

        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        putenv("$key=$value");
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

cargarEnv(__DIR__ . '/.env');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "Ungenannt";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "Keine E-Mail";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "Keine Nachricht";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Ungültige Mail"]);
        exit;
    }

    $to = getenv('MAIL_DESTINATION');
    $from = getenv('MAIL_ORIGIN');

    if (!$to || !$from) {
    die("Fehler: Konnte die .env-Variablen nicht laden");}
    
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