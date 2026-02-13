// Sticky Navbar
window.addEventListener('scroll', function () {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Carousel Scroll
function scrollCarousel(containerId, scrollAmount) {
    const container = document.getElementById(containerId);
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Optional: Auto-scroll hero text or element animations can go here
console.log("Movie Love OTT Platform Loaded");

// Add interaction to pill buttons
const pills = document.querySelectorAll('.category-pill');
pills.forEach(pill => {
    pill.addEventListener('click', function () {
        // Remove active class from all
        pills.forEach(p => p.classList.remove('active'));
        // Add to clicked
        this.classList.add('active');

        // Filter logic could go here
        console.log(`Filter by: ${this.textContent}`);
    });
});
