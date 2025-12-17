document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupClose = document.querySelector('.popup-close');

    // Check if popup has been shown in this session
    // For testing/development, you might want to comment out the sessionStorage check
    // if (!sessionStorage.getItem('melissaPopupShown')) {

    // Show popup after a small delay for better UX
    setTimeout(() => {
        popupOverlay.classList.add('active');
        sessionStorage.setItem('melissaPopupShown', 'true');
    }, 1000);
    // }

    function closePopup() {
        popupOverlay.classList.remove('active');
    }

    // Close on button click
    popupClose.addEventListener('click', closePopup);

    // Close on click anywhere
    popupOverlay.addEventListener('click', function () {
        closePopup();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            closePopup();
        }
    });
});
