const container = document.querySelector('.container');
const Login = document.querySelector('.link-login');
const Registro = document.querySelector('.link-registro');

Registro.addEventListener('click', ()=>{
    container.classList.add('active');
});

Login.addEventListener('click', ()=>{
    container.classList.remove('active');
});