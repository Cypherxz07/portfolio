const toggleBtn = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// Default: dark mode
document.body.classList.add("dark-mode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
    } else {
        moonIcon.style.display = "inline";
        sunIcon.style.display = "none";
    }
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");

    if (body.classList.contains("dark-mode")) {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    }
});

// Select all fade-in elements
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2, // 20% visible triggers the animation
};

const appearOnScroll = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");  // Fade in
        } else {
            entry.target.classList.remove("show"); // Reset when out of view
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

