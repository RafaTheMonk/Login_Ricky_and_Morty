const container = document.querySelector('.container');
const Login = document.querySelector('.link-login');
const Registro = document.querySelector('.link-registro');
const popUp = document.querySelector('.btn-login');
const fechar = document.querySelector('.icon-fechar');

Registro.addEventListener('click', ()=>{
    container.classList.add('active');
});

Login.addEventListener('click', ()=>{
    container.classList.remove('active');
});

popUp.addEventListener('click', ()=>{
    container.classList.add('active-popUp');
});

fechar.addEventListener('click', ()=>{
    container.classList.remove('active-popUp');
});

