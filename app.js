// SELECTING ELEMENTS
const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const links = document.querySelectorAll('.link');


//NAVIGATION EVENT LISTENERS
menu.addEventListener('click', function () {
    navList.classList.toggle('active');
    menu.classList.toggle('active');
});

links.forEach(n => n.addEventListener('click', () => {
    navList.classList.remove('active');
    menu.classList.remove('active');
}));