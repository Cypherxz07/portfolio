const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Theme persistence across reloads
const storedTheme = localStorage.getItem('portfolio-theme') || 'light';
root.dataset.theme = storedTheme;
if (storedTheme === 'dark') {
    themeBtn.textContent = '☀️';
} else {
    themeBtn.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
    const currentTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = currentTheme;
    localStorage.setItem('portfolio-theme', currentTheme);
    themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
});

// Hamburger menu toggle
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);

        // Rotate bars for alt states
        hamburger.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// Fade-in reveal on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Keyboard / smooth scroll anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


