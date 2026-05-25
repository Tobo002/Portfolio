document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('#mainNav');
            if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
});
