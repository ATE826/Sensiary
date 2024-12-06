function GetFormData() {
    const login = document.getElementById('reg-login').value;
    const password = document.getElementById('reg-password').value;
    const phone = document.getElementById('reg-phone').value;
    const mail = document.getElementById('reg-mail').value;
    const date = document.getElementById('reg-date').value;

    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    localStorage.setItem('phone', phone);
    localStorage.setItem('mail', mail);
    localStorage.setItem('date', date);
}

function SetDataFromForm() {
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');
    const phone = localStorage.getItem('phone');
    const mail = localStorage.getItem('mail');
    const date = localStorage.getItem('date');

    document.getElementById('prof-login').innerText = login || 'Нет данных';
    document.getElementById('prof-name').innerText = 'Нет данных';
    document.getElementById('prof-phone').innerText = phone || 'Нет данных';
    document.getElementById('prof-mail').innerText = mail || 'Нет данных';
    document.getElementById('prof-date').innerText = date || 'Нет данных';
    document.getElementById('prof-city').innerText = 'Нет данных';
    document.getElementById('prof-password').innerText = '*'.repeat(password.length) || 'Нет данных';
}

function handleRegistration() {
    GetFormData();
    window.location.href = 'profile.html';
}

window.addEventListener('DOMContentLoaded', SetDataFromForm);
