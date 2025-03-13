// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, 
                behavior: "smooth"
            });
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙 Dark Mode";
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #e63946;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease-in-out;
`;

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        darkModeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        darkModeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    }
});

// Load Theme Preference
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    darkModeToggle.textContent = "☀️ Light Mode";
}

// Fade-in Animations
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    const revealOnScroll = () => {
        document.querySelectorAll(".fade-in").forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});
