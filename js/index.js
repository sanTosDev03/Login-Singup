const user = JSON.parse(localStorage.getItem('login_success')) || false;
if(!user) {
    window.location.href = 'login.html';
}
const logOutBtn = document.getElementById('logout');
logOutBtn.addEventListener('click', () => {
    alert(`Hasta Pronto, ${user.name}`);
    localStorage.removeItem('login_success');
    window.location.href = 'login.html';
})


