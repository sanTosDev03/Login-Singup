const singupform = document.getElementById('singup__form');
const emailBox = document.querySelector('#email');
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
window.addEventListener('DOMContentLoaded', () => {
    singupform.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        /* Debemos evaluar si el email que ingrese ya se encuentra en nuestra 
        base de datos, si es así debe ingresar sesion y sino lo agregamos a nuestra
        base de datos (LocalStorage) */
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserRegistered = Users.find(user => user.email === email)
        if (isUserRegistered) {
            return alert('El usuario ya esta registrado');
        }
        Users.push({name:name,email:email,password:password})
        localStorage.setItem('users', JSON.stringify(Users))
        alert('Registro Exitoso');
        
        window.location.href = 'login.html';
    })
})
emailBox.addEventListener('keydown', (e)=> {
    const textAlert = document.getElementById('text');
    const emailText = emailBox.value;
    const pattern =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (emailText.length > 0) {
        if(pattern.test(emailText)) {
            textAlert.classList.remove('invalido');
            messageAlert(textAlert,'valido','email valido')
            setTimeout(() => {
                textAlert.classList.remove('valido');
                textAlert.classList.add('show');
            }, 2000);
        } else{
            textAlert.classList.remove('show');
            messageAlert(textAlert,'invalido','ingresa un email valido');
        }
    } else {
        textAlert.classList.remove('invalido');
        textAlert.classList.add('show');
    }
})
function messageAlert(textAlert,op,message){
    textAlert.classList.add(op);
    textAlert.textContent = message;
}





