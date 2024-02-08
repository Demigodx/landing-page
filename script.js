const wrappper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.log-link');
const regLink = document.querySelector('.reg-link');
const loginBtn = document.querySelector('.login-pop');
const closeIcon = document.querySelector('.icon-close');

regLink.addEventListener('click', ()=>{
    wrappper.classList.add('active');

});

loginLink.addEventListener('click', ()=>{
    wrappper.classList.remove('active');

});

loginLink.addEventListener('click', ()=>{
    wrappper.classList.remove('active');

});

loginBtn.addEventListener('click', ()=>{
    wrappper.classList.add('active-popup');

});

closeIcon.addEventListener('click', ()=>{
    wrappper.classList.remove('active-popup');

});