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
darkModeToggle.classList.add("dark-mode-btn");

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
