const form = document.getElementById('loginForm');
const output = document.getElementById('output');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({email, password})
    });

    if (response.ok) {
        const data = await response.json();
        output.textContent = `Success`;
    } else {
        const data = await response.text();
        output.textContent = `Error`;
    }
});