const form = document.getElementById('loginForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    output.textContent = `Email: ${email}, Password: ${password}`;

});