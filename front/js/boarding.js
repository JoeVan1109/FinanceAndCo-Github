document.addEventListener('DOMContentLoaded', function() {
    const featuredList = document.querySelector('.featured-list');
    const radioInputs = document.querySelectorAll('input[name="slide"]');
    let currentSlide = 0;

    function updateSlidePosition() {
        featuredList.style.transform = `translateX(-${currentSlide * 50}%)`;
        // Mettre à jour l'input radio
        radioInputs[currentSlide].checked = true;
    }

    // Gestion du changement d'input radio
    radioInputs.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentSlide = index;
            updateSlidePosition();
        });
    });

    // Gestion du scroll horizontal
    featuredList.addEventListener('scroll', function() {
        const scrollPosition = featuredList.scrollLeft;
        const slideWidth = featuredList.offsetWidth;

        if (scrollPosition > slideWidth / 4 && currentSlide === 0) {
            currentSlide = 1;
            updateSlidePosition();
        } else if (scrollPosition < slideWidth / 4 && currentSlide === 1) {
            currentSlide = 0;
            updateSlidePosition();
        }
    });

    // Gestion du swipe
    let startX, moveX;

    featuredList.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    featuredList.addEventListener('touchmove', (e) => {
        moveX = e.touches[0].clientX;
    });

    featuredList.addEventListener('touchend', () => {
        if (startX + 50 < moveX && currentSlide > 0) {
            currentSlide--;
        } else if (startX - 50 > moveX && currentSlide < 1) {
            currentSlide++;
        }
        updateSlidePosition();
    });
});