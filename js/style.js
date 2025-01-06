// ======= toggle style switcher ======

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// ========================= theme colors =========================
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    });
}

// ========================= theme day and night =========================
const dayNightButton = document.querySelector('.day-night');

dayNightButton.addEventListener('click', () => {
    // Toggle the sun and moon icons
    dayNightButton.querySelector('i').classList.toggle('fa-sun');
    dayNightButton.querySelector('i').classList.toggle('fa-moon');

    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark');

    // Save the user's preference (optional)
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load the user's saved preference (optional)
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        dayNightButton.querySelector('i').classList.add('fa-sun');
    }
});


// typing
// Assuming you have a HTML element with the class "typing"

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Back-End Developer", "Front-End Developer"],
    typeSpeed: 150,
    backSpeed: 60,
    loop: true
});
