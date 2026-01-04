const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Menu open/close toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menu open-la irukkumbothu ethavathu link-a click panna menu close aaganum
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
