document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            currentIndex = Array.from(items).indexOf(targetElement);
            updateCarousel();
        });
    });

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? 0 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === items.length - 1) ? currentIndex : currentIndex + 1;
        updateCarousel();
    });
});
