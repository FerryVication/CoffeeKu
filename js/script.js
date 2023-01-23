// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Humberger di Klik
document.querySelector('#humberger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};