const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <!-- <link rel="stylesheet" href="./assets/css/style.css"> -->
    <style>
        body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    text-align: center;
    margin: 20px;
    padding: 0;
}

.form-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
}

label {
    display: block;
    margin: 10px 0 5px;
}

input,
input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button, .button {
    width: 100%;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover, .button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    font-size: 12px;
    display: none;
}

#responseMessage {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
}

fieldset {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
}

legend {
    font-weight: bold;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline-block;
    margin-right: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
}

section {
    padding: 40px;
}

footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
}
     </style>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./aboutus.html">About</a></li>
                <li><a href="./dashboard.html">Dashboard</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <h2>Welcome to My Website</h2>
        <p>This is a brief introduction to my website or application.</p>
        <a href="./Login.html" class="button">Login</a>
        <a href="./Register.html" class="button">Register</a>
    </section>
        <footer>
            <div class="footer-container">
                <p>&copy; 2024 []. All rights reserved.</p>
                <p>Contact us: <a href="mailto:info@company.com">abc@gmail.com</a> | Phone: 903244577</p>
                <p>Follow us on: 
                    <a href="https://www.facebook.com">Facebook</a> | 
                    <a href="https://www.twitter.com">Twitter</a> | 
                    <a href="https://www.linkedin.com">LinkedIn</a>
                </p>
            </div>
    </footer>
    <!-- <script src="./assets/js/script.js"></script> -->
   
</body>
</html>
        `)
   
    res.end()
})

server.listen(4084, ()=>{
    console.log("Server is running @ http://localhost:4084")
})