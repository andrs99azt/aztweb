var menuBurguer = document.getElementsByClassName('burguer');
var menuMobile = document.getElementsByClassName('azteca-header_nav_mobile');
var greyFlull = document.getElementsByClassName('grey-full');

menuBurguer.addEventListener('click', function() {
    menuMobile.classList.toggle('view');
    greyFlull.classList.toggle('view');
});