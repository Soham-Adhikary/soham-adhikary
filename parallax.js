// Function to implement parallax scrolling effect
function parallaxScrolling() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');

    function updateParallax() {
        const scrollPosition = window.scrollY;

        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.speed) || 0.5; // Default speed is 0.5
            const offset = scrollPosition * speed;
            element.style.backgroundPosition = `center ${-offset}px`;
        });

        requestAnimationFrame(updateParallax);
    }

    requestAnimationFrame(updateParallax);
}

// Initialize the parallax effect on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    parallaxScrolling();
});
