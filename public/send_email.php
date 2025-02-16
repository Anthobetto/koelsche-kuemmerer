<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Función para cargar las variables del archivo .env
function cargarEnv($file) {
    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue;  // Ignorar comentarios

        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        // Establecer la variable de entorno
        putenv("$key=$value");

        // Depuración: Verificar que las variables se están cargando
        echo "Cargando variable: $key=$value<br>";  // Esto se imprimirá en la página
    }
}

// Cargar las variables del archivo .env
cargarEnv(__DIR__ . '/.env');

// Verificación de la carga de las variables
$destination = getenv('MAIL_DESTINATION');
$origin = getenv('MAIL_ORIGIN');

echo "Destino: $destination<br>";  // Verificar si la variable de destino se cargó
echo "Origen: $origin<br>";  // Verificar si la variable de origen se cargó

// Procesamiento de la solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "Ungenannt";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "Keine E-Mail";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "Keine Nachricht";

    // Validar el correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Ungültige Mail"]);
        exit;
    }

    // Usar las variables cargadas del archivo .env
    $to = $destination ?: "nombre_apellido@dominio.de";  // Valor por defecto si no se carga la variable
    $from = $origin ?: "kontakt@dominio.de";  // Valor por defecto si no se carga la variable

    // Configuración del correo
    $subject = "Neue Formularmeldung";
    $headers = "From: $from\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    // Cuerpo del mensaje
    $body = "Name: $name\nMail: $email\nNachricht:\n$message";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Mail gesendet"]);
    } else {
        echo json_encode(["success" => false, "message" => "Fehler beim Senden einer E-Mail"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Fehler: Keine POST-Anfrage"]);
}
?>