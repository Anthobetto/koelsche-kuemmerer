from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

# Cargar las variables de entorno desde el archivo .env
load_dotenv()

app = Flask(__name__)
CORS(app)  # Permite solicitudes desde el frontend

# Configuración de Flask-Mail con IONOS
app.config['MAIL_SERVER'] = 'smtp.ionos.de'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['SECRET_KEY'] = os.getenv('FLASK_APP_KEY')  # Usamos la clave secreta de .env
app.config['FLASK_DEBUG'] = os.getenv('FLASK_DEBUG')

# Inicializa Flask-Mail
mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    email = data.get('email')
    message = data.get('message')

    msg = Message(
        subject="Nuevo mensaje de contacto",
        sender=email,
        recipients=[app.config['MAIL_DEFAULT_SENDER']],
        body=f"Correo: {email}\n\nMensaje:\n{message}"
    )

    try:
        mail.send(msg)
        return jsonify({"success": "Correo enviado correctamente."}), 200
    except Exception as e:
        print(e)
        return jsonify({"error": "Error al enviar el correo."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)