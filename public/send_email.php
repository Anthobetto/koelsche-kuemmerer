<?php
// Muestra errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Verificar si la solicitud es un POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir y sanitizar los datos del formulario
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "Ungenannt";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "Keine E-Mail";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "Keine Nachricht";

    // Validar el formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Ungültige Mail"]);
        exit;
    }

    // Dirección de destino para los correos
    $to = "juergen.loschke@koelsche-kuemmerer.koeln"; // Cambia a tu correo real
    $subject = "Neue Formularmeldung";

    // Cabeceras del correo
    $headers = "From: kontakt@koelsche-kuemmerer.koeln\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    // Cuerpo del correo
    $body = "Name: $name\nMail: $email\nNachricht:\n$message";

    // Intentar enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Mail gesendet"]);
    } else {
        echo json_encode(["success" => false, "message" => "Fehler beim Senden einer E-Mail"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Fehler: Keine POST-Anfrage"]);
}
?>