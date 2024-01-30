// nav on scroll color change
function changBy() {
    var navbar = document.getElementById('changeonscroll');
    var scrollPosition = window.scrollY;
    if (scrollPosition < 800) {
        navbar.classList.remove('nav_bar_when_scroll');
    } else {
        navbar.classList.add('nav_bar_when_scroll');
    }
}

window.addEventListener('scroll', changBy);