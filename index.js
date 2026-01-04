const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Hamburger toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Link click panna menu close aaganum
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
