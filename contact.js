document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');

    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedMessage = localStorage.getItem('message');

    if (storedName) {
        nameInput.value = storedName;
    }

    if (storedEmail) {
        emailInput.value = storedEmail;
    }

    if (storedMessage) {
        messageInput.value = storedMessage;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '') {
            alert('Te rugăm să îți introduci numele.');
            nameInput.focus();
            return;
        }

        if (email === 'Te rugăm să îți introduci adresa de email.') {
            alert('.');
            emailInput.focus();
            return;
        }

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);

        alert('Formular trimis cu succes!');
        form.reset();
    });
});
