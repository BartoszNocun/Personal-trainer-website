const burgerBtn = document.querySelector('.burger-btn');
const navItems = document.querySelector('.nav__items');

const handleNav = () => {
    navItems.classList.toggle('nav__items--active');
    burgerBtn.classList.toggle('burger-btn--active');
}

burgerBtn.addEventListener('click', handleNav);
