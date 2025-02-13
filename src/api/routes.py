from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json() 
    email = data.get('email')
    message = data.get('message')

    if not email or not message:
        return jsonify({"error": "Email and message are required!"}), 400

    print(f"Email: {email}, Message: {message}")

    return jsonify({"status": "success", "message": "Form submitted successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)