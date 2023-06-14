const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-main__list");


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-main__list--active')
});