// script.js

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.onload = () => img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.classList.add('btn', 'btn-secondary', 'fixed-bottom', 'm-2');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('btn', 'btn-secondary', 'scroll-to-top', 'fixed-bottom', 'm-2');
scrollToTopButton.style.display = 'none';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Show/Hide Scroll to Top Button
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Dynamic Form Validation (Example implementation)
document.querySelector('form').addEventListener('submit', function(e) {
    const emailInput = this.querySelector('input[type="email"]');
    const phoneInput = this.querySelector('input[type="tel"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    let valid = true;

    if (!emailPattern.test(emailInput.value)) {
        emailInput.setCustomValidity("Please enter a valid email.");
        valid = false;
    } else {
        emailInput.setCustomValidity("");
    }

    if (!phonePattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Please enter a valid 10-digit phone number.");
        valid = false;
    } else {
        phoneInput.setCustomValidity("");
    }

    if (!valid) {
        e.preventDefault();
        alert("Please fix the errors in the form.");
    }
});