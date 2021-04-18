const menuIcon = document.querySelector(".menu_btn");

const navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})