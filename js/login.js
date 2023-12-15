const loginform = document.getElementById('login__form');
loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUsers = users.find(user => user.email === email && user.password === password)
    if(!validUsers) {
        return alert('Usuario y/0 contraseña incorrectos!')
    }
    alert(`Bienvenido, ${validUsers.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUsers));
    window.location.href = 'index.html';
})