let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let searchClose = document.querySelector('#close');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar')
let imgBtn = document.querySelectorAll('.img-btn')



loginForm.classList.remove('active');
searchClose.classList.remove('active');
searchBar.classList.remove('active');




searchBtn.addEventListener('click', () => {
    searchClose.classList.add('active');
    searchBar.classList.add('active');
});

searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
    searchClose.classList.remove('active');
})

formBtn.addEventListener('click', () => {
    document.querySelector('.login-form-container.active')
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active')
})

menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
})


// The spans of the images in the body

imgBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');;
        document.querySelector('#img-slider').src = src;
    })
})