const burgerBtn = document.querySelector('.burger-btn');
const navItems = document.querySelector('.nav__items');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    navItems.classList.toggle('nav__items--active');
    burgerBtn.classList.toggle('burger-btn--active');
}

burgerBtn.addEventListener('click', handleNav);
navItems.addEventListener('click', handleNav);

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();