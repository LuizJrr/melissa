document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.mobile-menu-close');

    function openMenu() {
        menuOverlay.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMenu() {
        menuOverlay.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
});
