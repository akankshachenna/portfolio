// Smooth Scrolling to Sections
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust the offset to avoid header overlap
                behavior: 'smooth'
            });
        });
    });
});

// Back to Top Button Functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = "↑";
backToTopButton.className = "back-to-top";
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
